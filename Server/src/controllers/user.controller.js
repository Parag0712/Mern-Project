import fs from 'fs';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import ApiResponse from '../utils/ApiResponse.js';
import { deleteFromCloudinary, uploadOnCloudinary } from '../utils/cloudinary.js';
import { User } from '../models/user.model.js';



// Validate Field
function validateField(value, fieldName) {
    if (value.trim() === "") {
        throw new ApiError(400, `${fieldName} is required`);
    }
}

// Validate File
function validateFile(avatarLocalPath, mb) {
    const avatarStats = fs.statSync(avatarLocalPath);
    const fileSizeInBytes = avatarStats.size;
    const fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
    const maxFileSizeInMegabytes = mb;
    if (fileSizeInMegabytes > maxFileSizeInMegabytes) {
        throw new ApiError(400, `Avatar file exceeds the maximum size of ${mb}MB`);
    }
}

// How we generate access token 
const generateAccessTokenAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false });
        return { accessToken, refreshToken }

    } catch (error) {
        throw new ApiError(500, error + "Something went wrong while generating access and refresh token 1");
    }
}

// Register EndPoint
const register = asyncHandler(async (req, res) => {

    const { username, email, password, number, isAdmin } = req.body;

    validateField(username, "username");
    validateField(email, "email");
    validateField(password, "password");

    if (!number || isNaN(number) || number < 10) {
        throw new ApiError(401, "Number is required and must be a number greater than or equal to 10");
    }

    // If User Exist Then Error

    const existedUser = await User.findOne({
        $or: [{ username: username }, { email: email }]
    });
    if (existedUser) throw new ApiError(409, "User with email or username already exists");


    // Get File from multer
    const avatarLocalPath = req.file?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar Image is required");
    }
    validateFile(avatarLocalPath, "10");

    const avatarImage = await uploadOnCloudinary(avatarLocalPath);
    console.log(avatarImage);
    if (!avatarImage) {
        throw new ApiError(400, "Error while uploading a avatar");
    }


    // Create User In Database
    const user = await User.create({
        username: username,
        email: email,
        number: number,
        isAdmin: isAdmin,
        avatar: {
            imgId: avatarImage.public_id,
            imgUrl: avatarImage.url
        },
        password: password,
    })

    user.password = undefined;
    user.refreshToken = undefined;

    console.log(user);

    if (!user) {
        throw new ApiError(500, "Something went wrong while registering the user");
    }

    // Send Response 
    return res.status(201).json(
        new ApiResponse(200, user, "User Register Successfully")
    );
});

// Login Method EndPoint
const login = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    console.log(username);
    console.log(email);
    if (!username && !email) {
        throw new ApiError(400, "Username or Email is required");
    }
    validateField(password);

    // Check User Exits or not
    const user = await User.findOne({
        $or: [{ username: username }, { email: email }]
    });


    // if not exist in database then send error
    if (!user) { throw new (404, "User does Not Exist"); }

    const isPasswordValid = await user.isPasswordCorrect(password)

    // If Password Is wrong so send error
    if (!isPasswordValid) {
        throw new (401, "Invalid user credentials");
    }

    const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(user._id);
    console.log(accessToken);
    console.log(refreshToken);
    //
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    //store in cookie 
    const options = {
        httpOnly: true,
        secure: true
    }

    // We Send Here Response 
    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(200, {
                user: loggedInUser,
                accessToken: accessToken,
                refreshToken: refreshToken,
            },
                "User Logged In Successfully"
            )
        )
});

const logout = asyncHandler(async(req,res)=>{
    
});


export { register, login }
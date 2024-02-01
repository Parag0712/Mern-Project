import fs from 'fs';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import ApiResponse from '../utils/ApiResponse.js';
import { deleteFromCloudinary, uploadOnCloudinary } from '../utils/cloudinary.js';
import { User } from '../models/user.model.js';

// Validate Field
function validateField(value, fieldName) {
    if (value.trim() === "") {
        return res.status(400).json(`${fieldName} is required`)
    }
}

// Validate File
function validateFile(avatarLocalPath, mb) {
    const avatarStats = fs.statSync(avatarLocalPath);
    const fileSizeInBytes = avatarStats.size;
    const fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
    const maxFileSizeInMegabytes = mb;
    if (fileSizeInMegabytes > maxFileSizeInMegabytes) {
        return res.status(400).json(`Avatar file exceeds the maximum size of ${mb}MB`)
    }
}

// How we generate access token 
const generateAccessTokenAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken =  user.generateRefreshToken();

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

        return res.status(401).json({
            message:"Number is required and must be a number greater than or equal to 10"
        })
    }

    // If User Exist Then Error

    const existedUser = await User.findOne({
        $or: [{ username: username }, { email: email }, { number: number }]
    });
    if (existedUser) {return res.status(409).json({
        message:"User with email or username or number already exists"
    })}


    // Get File from multer
    const avatarLocalPath = req.file?.path;

    const avatarImage = "";
    if (avatarLocalPath) {
        validateFile(avatarLocalPath, "10");
        avatarImage = await uploadOnCloudinary(avatarLocalPath);
        if (!avatarImage) {
            return res.status(400).json(
                {message:"Error while uploading a avatar"}
            )
        }
    }
    
    // Create User In Database
    const user = await User.create({
        username: username,
        email: email,
        number: number,
        isAdmin: isAdmin || false,
        avatar: {
            imgId: avatarImage?.public_id || "",
            imgUrl: avatarImage?.url || "" 
        },
        password: password,
    })

    user.password = undefined;
    user.refreshToken = undefined;


    if (!user) {
        return res.status(500).json(
            {message:"Something went wrong while registering the user"}
        )
    }

    // Access Token
    const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(user._id);

    //store in cookie 
    const options = {
        httpOnly: true,
        secure: true
    }

    // Send Response 
    return res
        .status(201)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(200, {
                user,
                accessToken: accessToken,
                refreshToken: refreshToken
            }, "User Register Successfully")
        );
});

// Login Method EndPoint
const login = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    console.log(username);
    console.log(email);
    if (!username && !email) {
        return res.status(400).json({
            message:"Username or Email is required"
        })
    }
    validateField(password);

    // Check User Exits or not
    const user = await User.findOne({
        $or: [{ username: username }, { email: email }]
    });


    // if not exist in database then send error
    if (!user) { return res.status(404).json({message:"User does Not Exist"}) }

    const isPasswordValid = await user.isPasswordCorrect(password)

    // If Password Is wrong so send error
    if (!isPasswordValid) {
        return res.status(401).json({message:"Invalid user credentials"})
    }

    const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(user._id);
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

// Logout Function
const logout = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: ""
            }
        },
        {
            new: true
        }
    );

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User Logged Out"))
});

// Get User Data
const getUserDetails = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(
            new ApiResponse(200, { user: req.user }, "User fetched successfully")
        )
});

const updateAccountDetails = asyncHandler(async (req, res) => {
    const { email, number, password } = req.body;

    validateField(email);
    validateField(password);

    if (!number || isNaN(number) || number < 10) {
        return res.status(401).json({message:"Number is required and must be a number greater than or equal to 10"})
    }


    // Check User Exits or not
    const user = await User.findOne({ _id: req.user._id });

    // if not exist in database then send error
    if (!user) { return res.status(404).json({message:"User does Not Exist"}) }
    // if (!user) { throw new (404, "User does Not Exist"); }

    const isPasswordValid = await user.isPasswordCorrect(password)


    // Password valid or not 
    if (!isPasswordValid) {
        return res.status(401).json({message:"Invalid user credentials"})
        // throw new (401, "Invalid user credentials");
    }

    try {
        const user = await User.findByIdAndUpdate(
            req.user._id,
            {
                $set: {
                    email: email,
                    number: number
                }
            },
            {
                new: true
            }
        ).select("-password -refreshToken");


        // Return Response
        return res
            .status(200)
            .json(
                new ApiResponse(200, { user }, "Account details updated successfully")
            )
    } catch (error) {
        throw new ApiError(401, error)
    }
});

const updateUserAvatarImage = asyncHandler(async (req, res) => {

    
    const avatarLocalPath = req.file.path;
    if (!avatarLocalPath) {
        return res.status(400).json({message:"Avatar Image is required"})

        // throw new ApiError(400, "Avatar Image is required");
    }

    // Validate maximum file size (5MB)
    validateFile(avatarLocalPath, "10");

    const user = await User.findById(req.user?._id).select('-password');

    const oldImgId = user.avatar.imgId;

    const avatarImage = await uploadOnCloudinary(avatarLocalPath);
    if (!avatarImage) {
        return res.status(400).json({message:"Error while uploading a avatar"})

        // throw new ApiError(400, "Error while uploading a avatar");
    }

    const avatarImageDelete = await deleteFromCloudinary(oldImgId);

    user.avatar.imgUrl = avatarImage.url;
    user.avatar.imgId = avatarImage.public_id;
    // //and save url
    const updatedUser = await user.save({ validateBeforeSave: false });
    return res
        .status(200)
        .json(
            new ApiResponse(200, updatedUser, "Avatar image updated successfully")
        )
})

export { register, login, logout, getUserDetails, updateAccountDetails, updateUserAvatarImage }
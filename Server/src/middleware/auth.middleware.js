import { User } from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken'

// Using this function you get userId based on token
const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        // Get token from cookie
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer", "");
        
        if (!token) {
            throw new ApiError(401, "Unauthorized request");
        }

        // Decode out Token
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");

        if (!user) {
            // HANDLE IN FRONTEND SIDE
            throw new ApiError(401, "Invalid Access Token");
        }

        // You Store in Your Object
        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
});

export { verifyJWT }
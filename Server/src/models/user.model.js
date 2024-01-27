import mongoose from "mongoose";
import bcrypt, { hash } from 'bcrypt'; //for hash password
import jwt from 'jsonwebtoken';


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    number: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    avatar: {
        imgId: {
            type: String,
        },
        imgUrl: {
            type: String,
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    refreshToken: {
        type: String,
    },
});

// Make Password hash
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next();
})

// For Validate Password
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}


// Make jwt Token Method

// Using This you can AccessToken
userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            username: this.username,
            email: this.email
        },
        process.env.ACCESS_TOKEN_SECRET
        , {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
}

// Using This you can generateRefreshToken
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

// This Code all about Model
export const User = mongoose.model("User", userSchema);
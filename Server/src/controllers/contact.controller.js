import { Contact } from "../models/contact.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
function validateField(value, fieldName) {
    if (value.trim() === "") {
        throw new ApiError(400, `${fieldName} is required`);
    }
}

// Contact Form
const contactForm = asyncHandler(async(req,res)=>{
    const {fullName,email,message} = req.body;
    validateField(fullName,"fullName");
    validateField(email,"email");
    validateField(message,"message");

    // Contact Form
    const contact =await Contact.create({
        fullName:fullName,
        email: email,
        message:message
    })

    if(!contact){
        throw new ApiError(500, "Something went wrong while registering the user");
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200,{},"Contact Form Submitted")
    )
})
export {contactForm};
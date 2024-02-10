import { Contact } from "../models/contact.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

function validateField(value, fieldName) {
    if (value.trim() === "") {
        return res.status(400).json({ message: `${fieldName} is required` })
    }
}

// Contact Form
const contactForm = asyncHandler(async (req, res) => {
    const { fullName, email, message } = req.body;
    validateField(fullName, "fullName");
    validateField(email, "email");
    validateField(message, "message");

    // Contact Form
    const contact = await Contact.create({
        fullName: fullName,
        email: email,
        message: message
    })

    if (!contact) {
        return res.status(500).json({ message: "Something went wrong while registering the user" })
    }

    return res
        .status(200)
        .json(
            new ApiResponse(200, {}, "Contact Form Submitted")
    )
})
export { contactForm };
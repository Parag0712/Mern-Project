import { Service } from "../models/service.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { deleteFromCloudinary, uploadOnCloudinary } from "../utils/cloudinary.js";

function validateField(value, fieldName) {
    if (value.trim() === "") {
        throw new ApiError(400, `${fieldName} is required`);
    }
}


// Add Service 
const addService = asyncHandler(async (req, res) => {
    const { name, description, category, price } = req.body;

    validateField(name, "service name");
    validateField(description, "service description");
    validateField(category, "service category");
    validateField(price, "service price");
    const serviceImageLocalPath = req.file.path;

    console.log(serviceImageLocalPath);
    if (!serviceImageLocalPath) {
        return res.status(400).json({message:"Image is required"})
    }
    const serviceImage = await uploadOnCloudinary(serviceImageLocalPath);

    console.log(serviceImage);
    if (!serviceImage) {
        return res.status(400).json({message:"Error while uploading a ServiceImage"})
    }

    // Service Create
    const service = await Service.create({
        name,
        description,
        category,
        serviceImage: {
            imgId: serviceImage.public_id,
            imgUrl: serviceImage.url
        },
        price
    });
    return res
        .status(200)
        .json(new ApiResponse(200, service, "Service added"))
});

// We Can Get Service
const getService = asyncHandler(async (req, res) => {
    const service = await Service.find()
    return res
        .status(200)
        .json(
            new ApiResponse(200, service, "Service Fetched Successfully")
        )
});

// UpdateService
const updateService = asyncHandler(async (req, res) => {
    const { serviceId } = req.params;

    const { name, description, category, price } = req.body;
    const serviceDetails = await Service.findById(serviceId);

    const imgId = serviceDetails.serviceImage.imgId;

    const serviceImageLocalPath = req.file.path;

    if (!serviceImageLocalPath) {
        return res.status(400).json({message:"Image is required"})
    }
    
    const serviceImage = await uploadOnCloudinary(serviceImageLocalPath);

    if (!serviceImage) {
        return res.status(400).json({message:"Error while uploading a ServiceImage"})
    }
    // Delete From Cloudinary
    const deleteImage = await deleteFromCloudinary(imgId)

    // Service Update
    const service = await Service.findByIdAndUpdate(
        serviceId,
        {
            $set: {
                name,
                description,
                serviceImage: {
                    imgId: serviceImage.public_id,
                    imgUrl: serviceImage.url
                },
                category,
                price
            }
        },
        {
            new: true
        }
    )

    return res
    .status(200)
    .json(
        new ApiResponse(200,{service},"Service Updated")
    )
})


// Delete Service 
const deleteService = asyncHandler(async (req,res)=>{
    const { serviceId } = req.params;

    const service = await Service.findById(serviceId);

    if(!service){
        return res.status(400).json({message:"Data Not found"})
    }
    const imgId = service.serviceImage.imgId;
    // Code For Delete Img from cloud 
    const deletedService = await Service.findByIdAndDelete(serviceId)
    await deleteFromCloudinary(imgId);
    return res
    .status(200)
    .json(
        new ApiResponse(200,{},"Service Deleted Successfully")
    )
})
export { addService, getService, updateService,deleteService}
import mongoose from 'mongoose'


const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    serviceImage:{
        imgId:{
            type:String
        },
        imgUrl:{
            type:String
        }
    },
    price: {
        type: String,
        required: true
    }
})


// Service Model Exported
export const Service = mongoose.model("Service", serviceSchema);
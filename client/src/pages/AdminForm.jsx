import { useForm } from "react-hook-form"
import { AnimationContainer, Input, Rte } from "../Components"
import "./adminform.css"
import { useState } from "react"
import { dataService } from "../Backend/service";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loadingStart, loadingStop } from "../App/loadingSlice";
import { useNavigate, useParams } from "react-router-dom";

function AdminForm({ service, edit }) {

    const { id } = useParams()
    if (edit) {
        if (!service?.name) {
            return
        }
    }

    const [nameError, setNameError] = useState();
    const [categoryError, setCategoryError] = useState();
    const [priceError, setPriceError] = useState();
    const [serviceImageError, setServiceImage] = useState();
    const [descError, setDesc] = useState();

    // name,category,description,price,serviceImage
    const { register, handleSubmit, watch, setValue, control, getValues ,reset} = useForm({
        defaultValues: {
            name: service?.name || "",
            id: service?.id || "",
            description: service?.description || "",
            category: service?.category || "",
            price: service?.price || "",
        }
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleService = (data) => {
        if (edit == "true") {
            dataService.updateService(data, id).then((val) => {
                toast.success("Service Updated")
                navigate("/adminservice")

            }).catch((error) => {
                console.log(error);
            })

            dataService.updateServiceImg(data, id).then((data) => {
                console.log(data);
            }).catch((error) => {
                console.log(error);
            })
        } else {
            dispatch(loadingStart());
            dataService.addService(data).
                then((value) => {
                    toast.success("Service Added")
                    data = ""
                    navigate("/adminservice")
                    reset()
                }).catch((error) => {
                    console.log(error);
                    dispatch(loadingStop());
                })
        }
    }


    return (
        <AnimationContainer>
            <center><h1>{edit ? "Edit Form" : "Add Form"}</h1></center>
            <form className="" onSubmit={handleSubmit(handleService)} encType="multipart/form-data">
                <div className="form-admin">
                    <div className="left">
                        <Input
                            label="name"
                            placeholder="Enter Name"
                            error={nameError} // Make sure `nameError` is defined and passed as a prop  
                            {...register("name", {
                                validate: {
                                    matchPattern: (value) => {
                                        const isValid = /^[a-zA-Z0-9 ,\-]+$/.test(value);
                                        if (isValid) {
                                            setNameError("");  // Clear the error message
                                        } else {
                                            setNameError("*Enter Valid Name"); // Set error message for invalid category name
                                        }
                                        return isValid; // Return the result of category name validation
                                    }

                                }
                            })}
                        />

                        <Input
                            label="Category"
                            placeholder="Enter Category"
                            error={categoryError}
                            {...register("category", {
                                validate: {
                                    matchPattern: (value) => {
                                        const isValid = /^[a-zA-Z0-9]+$/.test(value);
                                        if (isValid) {
                                            setCategoryError("");
                                        } else {
                                            setCategoryError("*Enter Valid Category");
                                        }
                                        return isValid;
                                    }
                                }
                            })}
                        />
                    </div>

                    <div className="right">
                        <Input
                            label="Price"
                            placeholder="Enter Price"
                            type="text"
                            error={priceError}
                            {...register("price", {
                                validate: {
                                    matchPattern: (value) => {
                                        const isValid = /^[a-zA-Z0-9 ,\-]+$/.test(value);
                                        if (isValid) {
                                            setPriceError("");
                                        } else {
                                            setPriceError("*Enter Valid Category");
                                        }
                                        return isValid;
                                    }
                                }
                            })}
                        />
                        <Input
                            label="ServiceImage"
                            type="file"
                            error={serviceImageError}
                            {...register("serviceImage", { required: true })}
                        />
                    </div>
                </div>
                <div className="desc">
                    <Rte label='description :'
                        defaultValue={getValues('description') || ''}
                        name="description"
                        control={control}
                    />
                </div>
                <input className='submit form-input btn' value={edit ? "Edit Form" : "Add Form"} type="submit" />
            </form>
        </AnimationContainer>
    )
}


export default AdminForm

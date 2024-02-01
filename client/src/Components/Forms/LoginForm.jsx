import React, { useState } from 'react'
import registerImg from '../../assets/images/login.png'
import './form.css'
import { useForm } from 'react-hook-form'
import Input from '../Common/Input';
import { AuthServices } from '../../Backend/auth';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loadingStart, loadingStop } from '../../App/loadingSlice';
import { useNavigate } from 'react-router-dom';
import { login } from '../../App/authSlice';
function LoginForm() {
    

    const { register, handleSubmit } = useForm();
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [userNameError, setUserNameError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    // Logint Handler
    const loginHandle = async (data) => {
        dispatch(loadingStart());
        AuthServices.login(data).then((value) => {
            const userData = value.data.user;
            dispatch(login({ userData }));
            toast.success(value.message);
            navigate('/');
        }).catch((error) => {
            toast.error(error)
        }).finally(() => {
            dispatch(loadingStop());
        })
    }

    return (
        <div className='form-container'>
            <img className='' src={registerImg} alt="" />
            <form className='form' onSubmit={handleSubmit(loginHandle)}>
                <h1>Login </h1>
                <div className="form-control">
                    <Input
                        label="Email"
                        placeholder="Enter Email"
                        error={emailError}
                        {
                        ...register("email", {
                            validate: {

                                matchPattern: (value) => {
                                    if (!value.trim()) {
                                        setEmailError("");  // Clear the error message
                                        return true;
                                    }

                                    const isValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
                                    if (isValid) {
                                        setEmailError("");  // Assuming `clearHelperError` is a function to clear the error message
                                    } else {
                                        setEmailError("*Enter Valid Email");
                                    }
                                    return isValid;
                                }
                            }
                        })
                        }
                    />
                </div>
                <span className='or-name'>or</span>
                <div className="form-control">
                    <Input
                        label="Username"
                        type="text"
                        placeholder="Enter Username"
                        error={`${userNameError}`}
                        {
                        ...register("username", {
                            validate: {
                                matchPattern: (value) => {

                                    if (!value.trim()) {
                                        setUserNameError("");  // Clear the error message
                                        return true;
                                    }

                                    const isValid = /^[a-zA-Z0-9\s]+$/.test(value);
                                    if (isValid) {
                                        setUserNameError("");  // Assuming `clearHelperError` is a function to clear the error message
                                    } else {
                                        setUserNameError("*Enter Valid Name without special characters");
                                    }
                                    return isValid;
                                }
                            }
                        })
                        }
                    />
                </div>
                <div className="form-control">
                    <Input
                        label="Password"
                        type="password"
                        error={passwordError}
                        placeholder="Enter Password"
                        {
                        ...register("password", {
                            validate: {
                                matchPattern: (value) => {
                                    const isValid = /^.{8,}$/.test(value);
                                    if (isValid) {
                                        setPasswordError(""); // Clear the error message
                                    } else {
                                        setPasswordError("Password must be at least 8 characters");
                                    }
                                    return isValid;
                                }
                            }
                        })
                        }

                    />
                </div>
                <div className='form-control'>
                    <input className='form-input btn' value="Login" type="submit" />
                </div>
            </form>
        </div>
    )
}

export default LoginForm
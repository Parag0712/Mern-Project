import React, { useState } from 'react'
import registerImg from '../../assets/images/register.png'
import './form.css'
import { useForm } from 'react-hook-form'
import { useScroll } from 'framer-motion'
import Input from '../Common/Input'
function RegisterForm() {

  const { register, handleSubmit } = useForm();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [userNameError, setUserNameError] = useState("");
  const [phoneError,setPhoneError] = useState("");

  const handleRegister = (data)=>{

  }
  return (
    <div className='form-container'>
      <img className='' src={registerImg} alt="" />
      <form className='form' onSubmit={handleSubmit(handleRegister)}>
        <h1 style={{ marginBottom: "10px" }}>Create Your Account</h1>
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
            label="Email"
            placeholder="Enter Email"
            error={emailError}
            {
            ...register("email", {
              validate: {
                matchPattern: (value) => {
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

        <div className="form-control">
          <Input
            label="Phone No"
            type="tel"
            error={phoneError}
            placeholder="Enter Number"
            {
            ...register("number", {
              validate: {
                matchPattern: (value) => {
                  const isValid = /^.{10,}$/.test(value);
                  if (isValid) {
                    setPhoneError(""); // Clear the error message
                  } else {
                    setPhoneError("Phone number must be at least 10 digits");
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
          <input className='form-input btn' value="Register" type="submit" />
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
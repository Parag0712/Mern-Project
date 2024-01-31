import React, { forwardRef, useId } from 'react'
import './input.css'

const Input = React.forwardRef(
    function Input({
        label = "",
        type = "text",
        placeholder = "PlaceHolder",
        error = "",
        ...props
    },ref) {
        const id = useId();
        return (
            <>
                <label htmlFor={id} >{label}</label>
                <input 
                    id={id} 
                    placeholder={placeholder} 
                    className='form-input' 
                    type={type}
                    ref={ref}
                    {...props}
                />
                <p className='form-error'>{error}</p>
            </>
        )
    }
)

export default Input

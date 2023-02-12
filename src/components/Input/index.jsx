import { forwardRef } from "react";

const Input = ({inputName, label, type, placeholder, error, ...rest}, ref) => {
    return (
        <div>
            <label htmlFor={inputName}>{label}</label>
            <input type={type} placeholder={placeholder} ref={ref} {...rest}/>
            {error && <small>{error}</small>}
            
        </div>
    )
}

export default forwardRef(Input);
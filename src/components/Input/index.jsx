import { forwardRef } from "react";
import Div from "./style";

const Input = ({inputName, value, label, type, placeholder, error, ...rest}, ref) => {
    return (
        <Div>
            <label htmlFor={inputName}>{label}</label>
            <input type={type} placeholder={placeholder} ref={ref} {...rest} value={value}/>
            {error && <small>{error}</small>}
            
        </Div>
    )
}

export default forwardRef(Input);
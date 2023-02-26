import { forwardRef } from "react";
import Div from "./style";

const Input = ({inputName, value, label, type, placeholder, error, ...rest}, ref) => {
    return (
        <Div>
            <label htmlFor={inputName} className='headline'>{label}</label>
            <input id={inputName} type={type} placeholder={placeholder} ref={ref} {...rest} value={value}/>
            {error && <small>{error}</small>}
            
        </Div>
    )
}

export default forwardRef(Input);
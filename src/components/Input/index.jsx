import { forwardRef, useContext, useState } from "react";
import Div from "./style";
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import { UserContext } from "../../contexts/UserContext";

const Input = ({inputName, value, label, type, placeholder, error, passwordButton, ...rest}, ref) => {

    const {showPassword, toggleShowPassword} = useContext(UserContext);
   
    return (
        <Div>
            <label htmlFor={inputName} className='headline'>{label}</label>

            <input id={inputName} type={type ? type : showPassword} placeholder={placeholder} ref={ref} {...rest} value={value}/>
            {error && <small>{error}</small>}

            {passwordButton && showPassword === 'text' && <AiFillEyeInvisible className="showHidePassword" onClick={toggleShowPassword}/>}

            {passwordButton && showPassword === 'password'&& <AiFillEye className="showHidePassword" onClick={toggleShowPassword}/>}
        </Div>
    )
}

export default forwardRef(Input);
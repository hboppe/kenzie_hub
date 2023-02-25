import { forwardRef, useContext } from "react"
import { TechContext } from "../../contexts/TechContext";
import Div from "./style";

const Select = ({selectName, label, options, error, onChange, value, ...rest}, ref) => {

    const addOptions = () => {
        return (
            options.map(item => <option key={item.id} value={item.value}>{item.text}</option>)
        )
    };

    return (
        <Div>
            <label htmlFor={selectName}>{label}</label> 
            <select id={selectName} {...rest} ref={ref} onChange={onChange}>

                {options && addOptions()}

            </select>
            {error && <small>{error}</small>}
        </Div>
    )
}

export default forwardRef(Select);
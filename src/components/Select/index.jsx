import { forwardRef } from "react"

const Select = ({selectName, label, options, error, ...rest}, ref) => {
    const addOptions = () => {
        return (
            options.map(item => <option key={item.id} value={item.value}>{item.text}</option>)
        )
    };

    return (
        <div>
                <label htmlFor={selectName}>{label}</label>
                <select id={selectName} {...rest} ref={ref}>

                    {options && addOptions()}

                </select>
                {error && <small>{error}</small>}
        </div>
    )
}

export default forwardRef(Select);
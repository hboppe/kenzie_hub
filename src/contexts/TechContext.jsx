import { createContext, useState } from "react";

const TechContext = createContext({});

const TechContextProvider = ({children}) => {

    const [showModal, setShowModal] = useState(false);
    const [editTech, setEditTech] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value)
    }

    const selectOptions = [
        {id: 1, value: 'Iniciante', text: 'Iniciante'},
        {id: 2,value: 'Intermediário', text: 'Intermediário'},
        {id: 3,value: 'Avançado', text: 'Avançado'}
    ]

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <TechContext.Provider value={{
            setEditTech,
            editTech,
            closeModal,
            showModal,
            setShowModal,
            selectedOption,
            handleSelectChange,
            selectOptions,
            setSelectedOption
        }}>
            {children}
        </TechContext.Provider>
    )
}

export { TechContext, TechContextProvider }
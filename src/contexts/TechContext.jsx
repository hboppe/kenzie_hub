import { createContext, useState } from "react";

const TechContext = createContext({});

const TechContextProvider = ({children}) => {

    const [showModal, setShowModal] = useState(false);
    const [editTech, setEditTech] = useState(null);

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <TechContext.Provider value={{
            setEditTech,
            editTech,
            closeModal,
            showModal,
            setShowModal
        }}>
            {children}
        </TechContext.Provider>
    )
}

export { TechContext, TechContextProvider }
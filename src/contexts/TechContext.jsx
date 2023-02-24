import { useContext } from "react";
import { createContext, useState } from "react";
import api from "../services/api";
import { UserContext } from "./UserContext";

const TechContext = createContext({});

const TechContextProvider = ({children}) => {

    const [showModal, setShowModal] = useState(false);
    const [editTech, setEditTech] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [techTitle, setTechTitle] = useState('');
    const {user, setUser} = useContext(UserContext);
    

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

    const updateTechInfo = async (formData) => {

        const token = localStorage.getItem('@KenzieHub:token');

        try {
            
            const response = await api.put(`/users/techs/${editTech.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            const updatedTechs = [...user.techs.map(tech => {
                if(tech.id === editTech.id){
                    return response.data;
                }
                return tech;
            })];

            setUser({...user, techs: updatedTechs})

        } catch (error) {
            // colocar toast
            console.log(error)
        } 
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
            setSelectedOption,
            techTitle,
            setTechTitle,
            updateTechInfo
        }}>
            {children}
        </TechContext.Provider>
    )
}

export { TechContext, TechContextProvider }
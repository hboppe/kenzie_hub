import { useContext } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { UserContext } from "./UserContext";

const TechContext = createContext({});

const TechContextProvider = ({children}) => {

    const [showEditModal, setShowEditModal] = useState(false);
    const [editTech, setEditTech] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [techTitle, setTechTitle] = useState('');
    const {user, setUser} = useContext(UserContext);
    const [addNewTech, setAddNewTech] = useState(false);
    

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value)
    }

    const selectOptions = [
        {id: 1, value: 'Iniciante', text: 'Iniciante'},
        {id: 2,value: 'Intermediário', text: 'Intermediário'},
        {id: 3,value: 'Avançado', text: 'Avançado'}
    ]

    const closeModal = () => {
        setShowEditModal(false)
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

            setUser({...user, techs: updatedTechs});
            closeModal();
            toast.success('Tecnologia atualizada com sucesso.');

        } catch (error) {
            toast.error('Nao foi possível atualizar a tecnologia, por favor, tente novamente.')
            console.log(error)
        } 
    }

    const deleteTech = async () => {

        const token = localStorage.getItem('@KenzieHub:token');

        try {

           const response = await api.delete(`/users/techs/${editTech.id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
           });

           const updatedTech = user.techs.filter(tech => tech.id !== editTech.id);
           setUser({...user, techs: updatedTech});
           closeModal();
           toast.success('Tecnologia deletada com sucesso.');

        } catch (error) {
            toast.error('Nao foi possível deletar a tecnologia atual, por favor, tente novamente.')
            console.log(error)
        }
    }

    const openAddNewTechModal = () => {
        setAddNewTech(true)
        console.log('deu bom')
    }

    const closeAddNewTechModal = () => {
        setAddNewTech(false)
    }

    return (
        <TechContext.Provider value={{
            setEditTech,
            editTech,
            closeModal,
            showEditModal,
            setShowEditModal,
            selectedOption,
            handleSelectChange,
            selectOptions,
            setSelectedOption,
            techTitle,
            setTechTitle,
            updateTechInfo,
            deleteTech,
            addNewTech,
            openAddNewTechModal,
            closeAddNewTechModal
        }}>
            {children}
        </TechContext.Provider>
    )
}

export { TechContext, TechContextProvider }
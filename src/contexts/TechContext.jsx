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
    const [showAddNewTechModal, setShowAddNewTechModal] = useState(false);
    
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
        setShowAddNewTechModal(true)
    }

    const closeAddNewTechModal = () => {
        setShowAddNewTechModal(false)
    }

    const addNewTech = async (formData) => {
        const token = localStorage.getItem('@KenzieHub:token');

        try {
            const response = await api.post('/users/techs', formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const updatedTechs = [...user.techs, response.data];
            setUser({...user, techs: updatedTechs})
            closeAddNewTechModal()
            toast.success('Cadastro de nova tecnologia realizado com sucesso.')
            
            
        } catch (error) {
            if(error.response.data.message == 'User Already have this technology created you can only update it') {

                closeAddNewTechModal()
                toast.error('Tecnologia já cadastrada. Por favor, insira outro nome.')
            } else {
                toast.error('Houve um erro. Por favor, tente novamente')
                closeAddNewTechModal()


            }

        }


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
            showAddNewTechModal,
            openAddNewTechModal,
            closeAddNewTechModal,
            addNewTech
        }}>
            {children}
        </TechContext.Provider>
    )
}

export { TechContext, TechContextProvider }
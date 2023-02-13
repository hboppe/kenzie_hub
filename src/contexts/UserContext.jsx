import { createContext, useState } from "react";
import{yupResolver} from '@hookform/resolvers/yup'
import { useForm } from "react-hook-form";
import LoginFormSchema from '../validations/LoginFormSchema'
import { toast } from "react-toastify";
import api from '../services/api'
import { useNavigate } from "react-router-dom";

const UserContext = createContext({});

const UserContextProvider = ({children}) => {


    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(LoginFormSchema)
    });

    const navigate = useNavigate();


    const loginUser = async (data) => {
        
        try {
            const response = await api.post('/sessions', data);
            
            localStorage.setItem('@KenzieHub:token', JSON.stringify(response.data.token))
            localStorage.setItem('@KenzieHub:userId', JSON.stringify(response.data.user.id))
            navigate('dashboard')

            toast.success('Login realizado com sucesso')


        } catch (error) {
            
            if(error.response?.status === 401){
                toast.error('Usuário ou senha incorretos')
            } else {
                toast.error('Erro ao realizar a requisiçao. Por favor, tente novamente')
                console.log(error)
            }

        }
    }

    return (
        <UserContext.Provider value={{
            loginUser,
            register,
            handleSubmit,
            errors
        }}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}
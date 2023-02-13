import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from '../services/api'
import { useNavigate } from "react-router-dom";

const UserContext = createContext({});

const UserContextProvider = ({children}) => {

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

    const registerUser = async (data) => {

        try {
            const response = await api.post('/users', data)
            toast.success('Cadastro realizado com sucesso')
            navigate('/')

        } catch (error) {
            if(error.response.data.message === "Email already exists"
            ) {
                toast.error('Email já cadastrado. Por favor, tente o login')
            } else {
                toast.error('Erro ao realizar o cadastro. Por favor, tente novamente')
            }
        }
    }



    return (
        <UserContext.Provider value={{
            loginUser,
            registerUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}
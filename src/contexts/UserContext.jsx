import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from '../services/api'
import { useNavigate } from "react-router-dom";

const UserContext = createContext({});

const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true)

    const navigate = useNavigate();

    const loginUser = async (data) => {
        setLoading(true)
        
        try {
            const response = await api.post('/sessions', data);

            const {user: userInfo, token} = response.data

            localStorage.setItem('@KenzieHub:token', token)
            setUser(userInfo)
            navigate('dashboard')
            toast.success('Login realizado com sucesso')

        } catch (error) {
            
            if(error.response?.status === 401){
                toast.error('Usuário ou senha incorretos')
            } else {
                toast.error('Erro ao realizar a requisiçao. Por favor, tente novamente')
                console.log(error)
            }

        } finally {
            setLoading(false)
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

    useEffect(() => {
        const token = localStorage.getItem('@KenzieHub:token') 

        const checkLocalStorage = async () => {
            
            if(!token){
                setLoading(false)
                return;
            }
            
            try {
                const responseCheckToken = await api.get('/profile', {
                    headers:{ Authorization: `Bearer ${token}`}
                })

                setUser(responseCheckToken.data)
                navigate('dashboard')

            } catch (error) {
                toast.error('Nao foi possível realizar o login. Tente novamente.')
                console.log(error)
            } finally {
                setLoading(false)

            }
        };

        checkLocalStorage()

    }, [])

    return (
        <UserContext.Provider value={{
            loginUser,
            registerUser, 
            user,
            loading, 
            navigate,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserContextProvider}
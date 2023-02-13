import StyledForm from "./styles";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import LoginFormSchema from "../../../validations/LoginFormSchema";
import api from '../../../services/api.js'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Input from "../../Input";


const Form = ({setLoading}) => {
    
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(LoginFormSchema)
    });

    const loginUser = async (data) => {
        
        try {
            const response = await api.post('/sessions', data);
            
            localStorage.setItem('@KenzieHub:token', JSON.stringify(response.data.token))
            localStorage.setItem('@KenzieHub:userId', JSON.stringify(response.data.user.id))
            navigate('dashboard')
            setLoading(true)
            toast.success('Login realizado com sucesso')


        } catch (error) {
            
            if(error.response.status === 401){
                toast.error('Usuário ou senha incorretos')
            } else {
                toast.error('Erro ao realizar a requisiçao. Por favor, tente novamente')
            }

        }
    }


    return (
        <StyledForm onSubmit={handleSubmit(loginUser)}>

            <Input inputName='email' 
                placeholder='Digite seu email aqui'
                label='Email' 
                type='text'
                error={errors.email?.message}
                {...register('email')}
            />

            <Input inputName='password' 
                placeholder='Digite sua senha aqui'
                label='Senha' 
                type='password'
                error={errors.password?.message}
                {...register('password')}
            />

            <button type="submit">Entrar</button>
        </StyledForm>
    )
}

export default Form;
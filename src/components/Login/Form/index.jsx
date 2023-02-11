import StyledForm from "./styles";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import LoginFormSchema from "../../../validations/LoginFormSchema";
import api from '../../../services/api.js'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const Form = ({setUser}) => {
    const showToast = () => {
        toast.success('Login realizado com sucesso', {
            position: "top-right",
            autoClose: 3000,
        })
    }

    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(LoginFormSchema)
    });

    const loginUser = async (data) => {
        
        try {
            const response = await api.post('/sessions', data);
            
            localStorage.setItem('@KenzieHub:token', JSON.stringify(response.data.token))
            localStorage.setItem('@KenzieHub:userId', JSON.stringify(response.data.user.id))
            setUser(response.data.user)
            navigate('dashboard')
            showToast()


        } catch (error) {
            console.log(error)

        }
    }



    return (
        <StyledForm onSubmit={handleSubmit(loginUser)}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" {...register('email')} />
                <p>{errors.email?.message}</p>
            </div>

            <div>
                <label htmlFor="password">Senha</label>
                <input type="password" {...register('password')}/>
                <p>{errors.password?.message}</p>
            </div>

            <button type="submit">Entrar</button>
        </StyledForm>
    )
}

export default Form;
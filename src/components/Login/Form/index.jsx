import StyledForm from "./styles";
import Input from "../../Input";
import {useContext} from 'react'
import {UserContext} from '../../../contexts/UserContext'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginFormSchema from "../../../validations/LoginFormSchema";

const Form = () => {

    const {loginUser} = useContext(UserContext);

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(LoginFormSchema)
    });

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
                error={errors.password?.message}
                passwordButton={true}
                {...register('password')}
            />

            <button type="submit">Entrar</button>
        </StyledForm>
    )
}

export default Form;
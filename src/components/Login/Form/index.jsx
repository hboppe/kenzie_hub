import StyledForm from "./styles";
import Input from "../../Input";
import {useContext} from 'react'
import {UserContext} from '../../../contexts/UserContext'


const Form = () => {

    const {loginUser, handleSubmit, errors, register} = useContext(UserContext);


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
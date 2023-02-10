import StyledForm from "./styles";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import LoginFormSchema from "../../../validations/LoginFormSchema";



const Form = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(LoginFormSchema)
    });

    const loginUser = (data) => {
        
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
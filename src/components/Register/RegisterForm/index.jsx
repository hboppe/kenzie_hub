import { useForm } from "react-hook-form";
import Form from "./styles"
import {yupResolver} from '@hookform/resolvers/yup'
import registerSchema from '../../../validations/RegisterFormSchema'
import Input from "../../Input";
import Select from "../../Select";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";

const RegisterForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(registerSchema)
    });

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value)
    }

    const {registerUser} = useContext(UserContext);

    const options = [
        {id: 1, value: 'Primeiro Módulo (Frontend iniciante)', text: 'Primeiro Modulo'},
        {id: 2,value: 'Segundo Módulo (Frontend intermediario)', text: 'Segundo Modulo'},
        {id: 3,value: 'Terceiro Módulo (Frontend avançado)', text: 'Terceiro Modulo'}
    ]

    return (
        <Form onSubmit={handleSubmit(registerUser)}>

            <Input inputName='name' 
                placeholder='Digite seu nome aqui'
                label='Nome' 
                type='text'
                error={errors.name?.message}
                {...register('name')}
            />

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

            <Input inputName='passwordConfig' 
                placeholder='Confirme sua senha'
                label='Confirmar senha' 
                type='password'
                error={errors.passwordConfig?.message}
                {...register('passwordConfig')}
            />

            <Input inputName='bio' 
                placeholder='False sobre você'
                label='Bio' 
                type='text'
                error={errors.bio?.message}
                {...register('bio')}
            />

            <Input inputName='contact' 
                placeholder='Opçao de contato'
                label='Contato' 
                type='text'
                error={errors.contact?.message}
                {...register('contact')}
            />

            <Select options={options} 
                label='Selecionar um módulo'
                selectName='course_module'
                error={errors['course_module']?.message}
                {...register('course_module')}
                onChange={handleSelectChange}/>

            <button type="submit">Cadastrar</button>
        </Form>
    )

}

export default RegisterForm;
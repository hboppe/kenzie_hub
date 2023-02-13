import { useForm } from "react-hook-form";
import Form from "./styles"
import {yupResolver} from '@hookform/resolvers/yup'
import registerSchema from '../../../validations/RegisterFormSchema'
import api from '../../../services/api.js'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify';
import Input from "../../Input";
import Select from "../../Select";

const RegisterForm = () => {

    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(registerSchema)
    });

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
                {...register('course_module')}/>

            <button type="submit">Cadastrar</button>
        </Form>
    )

}

export default RegisterForm;
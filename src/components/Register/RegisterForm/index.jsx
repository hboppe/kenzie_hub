import { useForm } from "react-hook-form";
import Form from "./styles"
import {yupResolver} from '@hookform/resolvers/yup'
import registerSchema from '../../../validations/RegisterFormSchema'
import axios from 'axios';
import api from '../../../services/api.js'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify';

const RegisterForm = () => {

    const showToast = () => {
        toast.success('Cadastro realizado com sucesso', {
            autoClose: 3000,
            theme: 'dark'
        })
    }

    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(registerSchema)
    });

    const registerUser = async (data) => {
        // console.log(data)

        try {
            const response = await api.post('/users', data)
            showToast()
            navigate('/')

        } catch (error) {
            if(error.response.data.message === "Email already exists"
            ) {
                toast.error('Email já cadastrado', {
                    autoClose: 3000,
                    theme: 'dark'
                })
            } else {
                toas.error('Erro ao realizar o cadastro. Por favor, tente novamente', {
                    autoClose: 3000,
                    theme: 'dark'
                })
            }
        }
    }



    return (
        <Form onSubmit={handleSubmit(registerUser)}>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" placeholder="Digite seu nome aqui" {...register('name')}/>
                <small>{errors.name?.message}</small>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Digite seu email aqui" {...register('email')}/>
                <small>{errors.email?.message}</small>

            </div>
            <div>
                <label htmlFor="password">Senha</label>
                <input type="password" placeholder="Digite sua senha aqui" {...register('password')}/>
                <small>{errors.password?.message}</small>

            </div>
            <div>
                <label htmlFor="passwordConfig">Confirmar senha</label>
                <input type="password" placeholder="Confirme sua senha" {...register('passwordConfig')}/>
                <small>{errors.passwordConfig?.message}</small>

            </div>

            <div>
                <label htmlFor="bio">Bio</label>
                <input type="text" placeholder="False sobre você" {...register('bio')}/>
                <small>{errors.bio?.message}</small>

            </div>
            <div>
                <label htmlFor="contact">Contato</label>
                <input type="text" placeholder="Opçao de contato" {...register('contact')}/>
                <small>{errors.contact?.message}</small>


            </div>
            <div>
                <label htmlFor="course_module">Selecionar modulo</label>
                <select id="course_module" {...register('course_module')}>
                    <option value="Primeiro Módulo (Frontend iniciante)">Primeiro Modulo</option>
                    <option value="Segundo Módulo (Frontend intermediario)">Segundo Modulo</option>
                    <option value="Terceiro Módulo (Frontend avançado)">Terceiro Modulo</option>

                </select>
                <small>{errors['course_module']?.message}</small>
            </div>
            <button type="submit">Cadastrar</button>
        </Form>
    )

}

export default RegisterForm;
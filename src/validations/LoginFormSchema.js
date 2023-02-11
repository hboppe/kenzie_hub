import * as yup from 'yup';

const LoginFormSchema = yup.object({
    email: yup.string().email('Digite um email válido').required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatória')
        .matches(/[a-zA-Z]/, 'Deve conter pelo menos 1 letra minuscula e maiúscula')
        .matches(/[\d]/, 'Deve conter pelo menos 1 número')
        .matches(/[\W|_]/, 'Deve conter pelo menos 1 caracter especial')
        .matches(/.{8,30}/, 'Deve ter no mínimo 8 e no máximo 30 caracteres')
})



export default LoginFormSchema;
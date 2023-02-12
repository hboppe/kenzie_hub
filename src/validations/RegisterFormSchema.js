import * as yup from 'yup';

const registerSchema = yup.object({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatória')
        .matches(/[a-zA-Z]/, 'Deve conter pelo menos 1 letra minuscula e maiúscula')
        .matches(/[\d]/, 'Deve conter pelo menos 1 número')
        .matches(/[\W|_]/, 'Deve conter pelo menos 1 caracter especial')
        .matches(/.{8,30}/, 'Deve ter no mínimo 8 e no máximo 30 caracteres'),
    passwordConfig: yup.string().required('Confirmaçao de senha é obrigatória').oneOf([yup.ref('password')], 'Senha não corresponde a anterior'),
    bio: yup.string().required('Bio é obrigatória'),
    contact: yup.string().required('Contato é obrigatório'),
    ['course_module']: yup.string().required('Selecione um módulo')
})

export default registerSchema;
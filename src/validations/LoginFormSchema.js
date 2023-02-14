import * as yup from 'yup';

const LoginFormSchema = yup.object({
    email: yup.string().email('Digite um email válido').required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatória')

})

export default LoginFormSchema;
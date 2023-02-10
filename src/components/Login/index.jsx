import Logo from '../../assets/Logo.svg';
import { useForm } from "react-hook-form";
import StyledSection from './styles';
import Form from './Form';
import { Link } from 'react-router-dom';


const Login = () => {

    const {register} = useForm();

    return (
        <>
            <img src={Logo} alt="Kenzie Hub logo" />
            <StyledSection>
                    <h3>Login</h3>
                    <Form/>
                    <p>Ainda não possui uma conta?</p>
                    <Link to='register'>Cadastre-se</Link>
            </StyledSection>
        
        </>
    )
}

export default Login;
import Logo from '../../assets/Logo.svg';
import { useForm } from "react-hook-form";
import StyledSection from './styles';
import Form from './Form';
import { Link } from 'react-router-dom';
import Header from '../Header';


const Login = ({setUser}) => {
    
    const {register} = useForm();

    return (
        <>
            <Header/>
            {/* <img src={Logo} alt="Kenzie Hub logo" /> */}
            <StyledSection>
                    <h3 className='title2'>Login</h3>
                    <Form setUser={setUser}/>
                    <p className='paragAccount headlineBold'>Ainda não possui uma conta?</p>
                    <Link to='register'>Cadastre-se</Link>
            </StyledSection>
        
        </>
    )
}

export default Login;
import Logo from '../../assets/Logo.svg';
import { useForm } from "react-hook-form";
import Main from './styles';
import Form from './Form';
import { Link } from 'react-router-dom';
import Header from '../Header';


const Login = ({setLoading}) => {
    
    const {register} = useForm();

    return (
        <>
            <Header/>
            {/* <img src={Logo} alt="Kenzie Hub logo" /> */}
            <Main>
            <section>
                    <h3 className='title2'>Login</h3>
                    <Form />
                    <p className='paragAccount headlineBold'>Ainda não possui uma conta?</p>
                    <Link to='register'>Cadastre-se</Link>
            </section>

            </Main>

        
        </>
    )
}

export default Login;
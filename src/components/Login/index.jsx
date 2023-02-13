import Main from './styles';
import Form from './Form';
import { Link } from 'react-router-dom';
import Header from '../Header';


const Login = ({setLoading}) => {
    

    return (
        <>
            <Header/>
            <Main>
            <section>
                    <h3 className='title2'>Login</h3>
                    <Form setLoading={setLoading}/>
                    <p className='paragAccount headlineBold'>Ainda não possui uma conta?</p>
                    <Link to='register'>Cadastre-se</Link>
            </section>

            </Main>

        
        </>
    )
}

export default Login;
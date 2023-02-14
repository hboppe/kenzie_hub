import Header from "../Header";
import Main from './styles';
import RegisterForm from './RegisterForm'

const Register = () => {
    
    return (
        <>
            <Header buttonText='Voltar' path='/' headerClassName='withButton'/>
            <Main>
                <section>
                    <h1 className="title1">Crie sua conta</h1>
                    <small className="headline">Rapido e grátis, vamos nessa</small>
                    <RegisterForm/>
                </section>
            </Main>
        </>
    )
}

export default Register;
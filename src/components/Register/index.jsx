import Header from "../Header";
import RegisterSection from './styles';
import RegisterForm from './RegisterForm'


const Register = () => {
    

    return (
        <>
            <Header/>
            <RegisterSection>
                <h2>Crie sua conta</h2>
                <small>Rapido e grátis, vamos nessa</small>
                <RegisterForm>

                </RegisterForm>
            </RegisterSection>
        </>
    )
}

export default Register;
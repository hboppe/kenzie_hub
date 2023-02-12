import Header from "../Header";
import RegisterSection from './styles';
import RegisterForm from './RegisterForm'


const Register = () => {
    

    return (
        <>
            <Header buttonText='Voltar' path='/' headerClassName='withButton'/>
            <RegisterSection>
                <div className="sectionContainer">
                    <h1 className="title1">Crie sua conta</h1>
                    <small className="headline">Rapido e grátis, vamos nessa</small>
                    <RegisterForm/>
                </div>
            </RegisterSection>
        </>
    )
}

export default Register;
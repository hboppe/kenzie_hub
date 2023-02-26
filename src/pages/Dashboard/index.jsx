import { useContext } from "react";
import Header from "../../components/Header";
import UserInfo from "../../components/UserInfo";
import { toast } from "react-toastify";
import Technologies from "../../components/Technologies";
import { UserContext } from "../../contexts/UserContext";

const Dashboard = () => {

    const {user, loading, navigate} = useContext(UserContext);

    if(loading){

        return <p>Carregando...</p>

    } else if(!user){

        toast.error('Você não tem permissao de acessar essa página.')
        navigate(-1)
        return 
    }

    const logout = () => {

        localStorage.clear();
        toast.success('Logout realizado com sucesso.')
    }

    return (
        <>
            <Header buttonText='Sair' path='/' handleClick={logout} headerClassName='withButton' linkClassName='headline'/>
            {loading ? <p>Carregando...</p> : 

            <>
                <UserInfo user={user}/>
                <Technologies user={user} loading={loading}/>
            </>
            }
            
        </>
    )
}

export default Dashboard;
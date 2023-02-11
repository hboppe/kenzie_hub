import { useEffect } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import Header from "../../components/Header";
import UserInfo from "../../components/UserInfo";
import api from "../../services/api";
import { toast } from "react-toastify";
import Technologies from "../../components/Technologies";

const Dashboard = ({user, setUser}) => {

    const logout = () => {
        localStorage.clear();
    }

    const showToast = () => {
        toast.error('Você não tem permissao de acessar essa página.', {
            position: "top-right",
            autoClose: 3000,
        })
    }
    
    const navigate = useNavigate()

    useEffect(  () => {

        const userId = JSON.parse(localStorage.getItem('@KenzieHub:userId'));
       

        const getUserInfos = async () => {

            try {
                const getUser =  await api.get(`/users/${userId}`);
                const getUserResponse = await getUser.data;

                setUser({...getUserResponse})

                console.log(getUserResponse)

                console.log(`entrou no TRY`, getUser.data)
                
            } catch (error) {
                console.log(`Erro aqui`, error)
                if(error.response.status === 404){
                    
                    navigate('/')
                    showToast()  
                }
            }
        }

        getUserInfos()

    }, [])

    return (
        <>
            <Header buttonText='Sair' path='/' handleClick={logout}/>
            <UserInfo user={user}/>
            <Technologies tech={user}/>
        </>
    )
}

export default Dashboard;
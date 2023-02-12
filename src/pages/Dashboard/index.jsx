import { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import Header from "../../components/Header";
import UserInfo from "../../components/UserInfo";
import api from "../../services/api";
import { toast } from "react-toastify";
import Technologies from "../../components/Technologies";

const Dashboard = () => {

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});

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
                setLoading(true)
                const getUser =  await api.get(`/users/${userId}`);
                const getUserResponse =  await getUser.data;
                setUser(getUser.data)
                // console.log({...getUser.data})
                // console.log(user)



                // setUser({...getUserResponse})

                // console.log(getUserResponse)

                // console.log(`entrou no TRY`, getUser.data)
                
            } catch (error) {
                console.log(`Erro aqui`, error)
                // if(error.response.status === 404){
                    
                //     navigate('/')
                //     showToast()  
                // }
            } finally {
                setLoading(false)
                // console.log(user)
            }
        }

        getUserInfos()

    }, [])

    if(loading) {
        return <p>Carregando...</p>
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
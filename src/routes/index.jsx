import {Routes, Route} from 'react-router-dom'
import Header from '../components/Header';
import Login from '../components/Login';
import Home from '../pages/Home'
import Register from '../components/Register'

const AppRoutes = () => {
    return (
        <Routes>
            <Route>

            </Route>
            <Route path='/' element={<Home/>}>
               
                <Route index element={<Login/>}/>
                <Route path='register' element={<Register/>}/>

            </Route>
            
        </Routes>
    )
}

export default AppRoutes;
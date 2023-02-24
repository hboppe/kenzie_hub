import {Routes, Route} from 'react-router-dom'
import Login from '../components/Login';
import Home from '../pages/Home'
import Register from '../components/Register'
import Dashboard from '../pages/Dashboard';
import { TechContextProvider } from '../contexts/TechContext';

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Home/>}>
               
                <Route index element={<Login />}/>
                <Route path='register' element={<Register/>}/>
                
            </Route>
            <Route path='/dashboard' element={
                <TechContextProvider>
                    <Dashboard />
                </TechContextProvider>}/>                
        </Routes>
    )
}

export default AppRoutes;
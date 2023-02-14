import {Routes, Route} from 'react-router-dom'
import Login from '../components/Login';
import Home from '../pages/Home'
import Register from '../components/Register'
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => {

    return (
        <Routes>
            <Route>

            </Route>
            <Route path='/' element={<Home/>}>
               
                <Route index element={<Login />}/>
                <Route path='register' element={<Register/>}/>
                
            </Route>
            <Route path='/dashboard' element={<Dashboard />}/>
                        
        </Routes>
    )
}

export default AppRoutes;
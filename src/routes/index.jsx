import {Routes, Route} from 'react-router-dom'
import Header from '../components/Header';
import Login from '../components/Login';
import Home from '../pages/Home'
import Register from '../components/Register'
import { useState } from 'react';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => {

    const [user, setUser] = useState({});

    return (
        <Routes>
            <Route>

            </Route>
            <Route path='/' element={<Home/>}>
               
                <Route index element={<Login setUser={setUser}/>}/>
                <Route path='register' element={<Register/>}/>
                
            </Route>
            <Route path='/dashboard' element={<Dashboard user={user} setUser={setUser}/>}/>
            
            
        </Routes>
    )
}

export default AppRoutes;
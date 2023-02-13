import {GlobalStyle} from './GlobalStyles/styles'
import AppRoutes from './routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContextProvider } from './contexts/UserContext';

function App() {

  return (
    <div className="App">
      <GlobalStyle/>
      <UserContextProvider>
        <AppRoutes/>

      </UserContextProvider>

      <ToastContainer theme='dark' autoClose={3000} position='top-right'/>
    </div>
  )
}

export default App

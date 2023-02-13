import GlobalStyle from './GlobalStyles/styles'
import AppRoutes from './routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <GlobalStyle/>
      <AppRoutes/>
      <ToastContainer theme='dark' autoClose={8000}/>
    </div>
  )
}

export default App

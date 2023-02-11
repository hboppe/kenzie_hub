import { useState } from 'react'
import reactLogo from './assets/react.svg'
import GlobalStyle from './GlobalStyles/styles'
import AppRoutes from './routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <GlobalStyle/>
      <AppRoutes/>
      <ToastContainer/>
    </div>
  )
}

export default App

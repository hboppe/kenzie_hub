import { useState } from 'react'
import reactLogo from './assets/react.svg'
import GlobalStyle from './GlobalStyles/styles'
import AppRoutes from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <GlobalStyle/>
      <AppRoutes/>
    </div>
  )
}

export default App

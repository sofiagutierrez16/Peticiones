import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Peticiones } from './componente/Peticiones'
import { Condicion } from './componente/Condicion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Peticiones/>
      <Condicion age={18}/> 
    </>
  )
}

export default App

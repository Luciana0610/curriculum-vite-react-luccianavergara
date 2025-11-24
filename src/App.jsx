import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './components/Cabecera.jsx'
import Perfil from './components/Perfil.jsx'
import Habilidades from './components/Habilidades.jsx'
import Projectos from './components/Proyectos.jsx'
import Contacto from './components/Contacto.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <div>
      <Cabecera/>
    </div>
    <div>
      <Perfil/>
    </div>
    <div>
      <Habilidades />
    </div>
    <div>
      <Proyectos />
    </div>
    <div>
      <Contacto />
    </div>

    </>
  )
}
  


export default App

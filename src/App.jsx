import { useState } from 'react'
import './App.css'
import Cabecera from './components/Cabecera.jsx'
import Perfil from './components/Perfil.jsx'
import Habilidades from './components/Habilidades.jsx'
import Contacto from './components/Contacto.jsx'
import Proyectos from './components/Proyectos.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Cabecera />
      </div>

      <div>
        <Perfil />
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


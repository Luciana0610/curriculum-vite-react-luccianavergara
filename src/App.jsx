import { useState } from 'react';
import './style.css';
import Cabecera from './components/Cabecera.jsx';
import Perfil from './components/Perfil.jsx';
import Habilidades from './components/Habilidades.jsx';
import Contacto from './components/Contacto.jsx';
import Proyectos from './components/Proyectos.jsx';
import StackTecnologias from './components/StackTecnologias.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="container">
      <Cabecera />
      <Perfil />
      <Habilidades />
      <Proyectos />
      <Contacto />
      <StackTecnologias />
    </div>
  );
}

export default App;

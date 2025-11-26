import { useState } from 'react';
import './style.css';
import Cabecera from './components/Cabecera.jsx';
import Perfil from './components/Perfil.jsx';
import Habilidades from './components/Habilidades.jsx';
import Contacto from './components/Contacto.jsx';
import Proyectos from './components/Proyectos.jsx';
import StackTecnologias from './components/StackTecnologias.jsx';

import { datosPersonales, perfil, experiencias, estudios } from "./data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="container">
      <>
      <Contacto />
      <StackTecnologias />
      <Cabecera
        nombre={datosPersonales.nombre}
        cargo={datosPersonales.cargo}
        ciudad={datosPersonales.ciudad}
        contacto={datosPersonales.contacto}
      />

      <Perfil resumen={perfil.resumen} />

      <Proyectos lista={experiencias} />

      <Habilidades estudios={estudios} />
    </>

    </div>
  );
}

export default App;

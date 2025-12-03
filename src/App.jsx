// src/App.jsx
import React, { useState } from "react";
import {
  initialTecnologias,
  initialHabilidades,
  perfil
} from "./data/data.js";

import ToggleHabilidades from "./components/ToggleHabilidades";
import FormularioTecnologia from "./components/FormularioTecnologia";

function App() {
  // Estado dinámico del stack
  const [tecnologias, setTecnologias] = useState(initialTecnologias);

  // Estado para mostrar/ocultar habilidades
  const [mostrarHabilidades, setMostrarHabilidades] = useState(false);

  // Callback para agregar tecnologías
  function agregarTecnologia(nueva) {
    if (tecnologias.includes(nueva)) return; // evita duplicados
    setTecnologias(prev => [...prev, nueva]);
  }

  function toggleHabilidades() {
    setMostrarHabilidades(prev => !prev);
  }

  return (
    <div>
      <header>
        <h1>{perfil.nombre}</h1>
        <h2>{perfil.titulo}</h2>
        <p>{perfil.descripcion}</p>
      </header>

      <main>
        {/* Sección de tecnologías */}
        <section>
          <h3>Stack de Tecnologías</h3>
          <ul>
            {tecnologias.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>

          <FormularioTecnologia agregarTecnologia={agregarTecnologia} />
        </section>

        {/* Sección de habilidades (interactiva) */}
        <section>
          <ToggleHabilidades
            visible={mostrarHabilidades}
            onToggle={toggleHabilidades}
            habilidades={initialHabilidades}
          />
        </section>
      </main>
    </div>
  );
}

export default App;


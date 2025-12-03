// src/components/ToggleHabilidades.jsx
import React from "react";

export default function ToggleHabilidades({ visible, onToggle, habilidades = [] }) {
  return (
    <section>
      <button onClick={onToggle}>
        {visible ? "Ocultar habilidades" : "Mostrar habilidades"}
      </button>

      {visible && (
        <ul>
          {habilidades.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}
    </section>
  );
}


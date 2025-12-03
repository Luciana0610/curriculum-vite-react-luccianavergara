// src/components/FormularioTecnologia.jsx
import React, { useState } from "react";

export default function FormularioTecnologia({ agregarTecnologia }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // evita recargar la página
    const nueva = input.trim();
    if (!nueva) return;
    agregarTecnologia(nueva);
    setInput(""); // limpia el campo
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nueva tecnología:
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ej: TypeScript"
        />
      </label>

      <button type="submit">Agregar</button>
    </form>
  );
}

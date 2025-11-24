import React from "react";

function Habilidades() {
  const educacion = [
    {
      institucion: "I.E José Antonio Galán",
      curso: "Bachiller Académico",
      año: 2024,
    },
    {
      institucion: "Politecnico Jaime Isaza Cadavid",
      curso: "Técnico Laboral en Sistemas Informáticos",
      año: 2025,
    },
    {
      institucion: "SENA - Centro de Tecnología de la Manufactura Avanzada (CTMA)",
      curso: "Tecnólogo en Análisis y Desarrollo de Software (ADSO)",
      año: "2025 - 2027",
    },
    {
      institucion: "SENA",
      curso: "Asesoria para el uso de las TIC",
      año: 2025,
    },
    {
      institucion: "SENA",
      curso: "Inglés Nivel 1",
      año: 2025,
    },
  ];

  return (
    <section className="section">
      <h2>Educación</h2>
      <ul id="skills">
        {educacion.map((edu, index) => (
          <li key={index}>
            <strong>{edu.curso}</strong> - {edu.institucion} ({edu.año})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Habilidades;

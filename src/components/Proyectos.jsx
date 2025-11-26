export default function Proyectos({ lista }) {
  return (
    <section>
      <h2>Experiencia</h2>
      <ul>
        {lista.map((exp, i) => (
          <li key={i}>
            <strong>{exp.cargo}</strong> — {exp.empresa} ({exp.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}
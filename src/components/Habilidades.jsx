export default function Habilidades({ estudios }) {
  return (
    <section>
      <h2>Educación</h2>
      <ul>
        {estudios.map((item, i) => (
          <li key={i}>
            {item.titulo} — {item.centro} ({item.año})
          </li>
        ))}
      </ul>
    </section>
  );
}
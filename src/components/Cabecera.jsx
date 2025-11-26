export default function CabeceraCV({ nombre, cargo, ciudad, contacto }) {
  return (
    <header>
      <h1>{nombre}</h1>
      <p>{cargo} — {ciudad}</p>
      <p>Contacto: {contacto}</p>
    </header>
  );
}

import react from "react";

function Proyectos() {
  const experiencias = [
    { cargo: "Desarrollador Front-End", empresa: "SENA", año: 2025, descripcion: "Desarrollo de componentes en React." },
    { cargo: "Técnico en sistemas informaticos", empresa: "Politecnico Jaime Isaza Cadavid", año: 2020, descripcion: "Diseño y desarrollo de apps." },
    { cargo: "Auxiliar de Software", empresa: "SENA", año: 2025, descripcion: "Apoyo en proyectos Node.js." },
    { cargo: "Asistente Administrativo", empresa: "LogiTrans SAS", año: 2008, descripcion: "Gestión de documentos, atención al cliente y apoyo en procesos internos de logística." },
    { cargo: "Soporte Técnico", empresa: "SENA", año: 2025, descripcion: "Atención y resolución de incidentes." },
    { cargo: "Auxiliar de Servicio al Cliente", empresa: "Comercializadora Global", año: 2019, descripcion: "Atención a usuarios, manejo de solicitudes y resolución de problemas." },
    { cargo: "Coordinador de Marketing Digital", empresa: "SmartBrand Agency", año: 2022, descripcion: "Gestión de campañas publicitarias, análisis de métricas y creación de contenido digital." },
    { cargo: "Analista Junior", empresa: "SENA", año: 2025, descripcion: "Análisis de requerimientos de software." },
    { cargo: "Proyecto: Tienda Online", empresa: "Proyecto Freelance", año: 2025, descripcion: "E-commerce con autenticación, pasarela de pagos y panel de administración." },
    { cargo: "Voluntario Tech", empresa: "SENA", año: 2025, descripcion: "Charlas sobre desarrollo web." }
  ];

  return (
    <div>
      {experiencias.map((exp, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <strong>{exp.cargo}</strong> - {exp.empresa} ({exp.año})<br />
          <em>{exp.descripcion}</em>
        </div>
      ))}
    </div>
  );
}

export default Proyectos
import React from "react";

function StackTecnologias() {
  const tecnologias = [
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Vite",
  ];

  // Función para cambiar el color de fondo según la tecnología
  const getColor = (tec) => {   
    if (tec === "JavaScript") return "#F7DF1E"; 
    if (tec === "HTML") return "#e426bbff";       
    if (tec === "CSS") return "#2965F1";                  
    if (tec === "Git") return "#3af230ff";        
    if (tec === "GitHub") return "#e33849ff";        
    if (tec === "Vite") return "#4951e9ff";      
    return "#ccc";                             
  };

  return (
    <div style={{ marginTop: "15px" }}>
      {tecnologias.map((tec, index) => (
        <span
          key={index}
          style={{
            backgroundColor: getColor(tec),
            color: tec === "JavaScript" ? "black" : "white",
            padding: "8px 12px",
            margin: "6px",
            borderRadius: "15px",
            display: "inline-block",
            fontWeight: "bold",
          }}
        >
          {tec}
        </span>
      ))}
    </div>
  );
}

export default StackTecnologias;
import React from "react";
import "./ConstructionPage.css";
import logo from "/image/android-chrome-192x192.png"; // Importar el logo

const ConstructionPage: React.FC = () => {
  return (
    <div className="construction-container">
      <main className="content">
        <div className="icon">🚧</div>
        <h1>Página en Construcción</h1>
        <p>Estamos trabajando para crear algo increíble. ¡Vuelve pronto!</p>
      </main>
      <footer className="footer">
        <img src={logo} alt="Logo de la empresa" className="footer-logo" />
        <p>Angelus Infernus Tecnology</p>
      </footer>
    </div>
  );
};

export default ConstructionPage;

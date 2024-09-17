// src/pages/HomePage.tsx
import React from 'react';
import SignInForm from '../SignInForm'; // Verifique se o caminho de importação está correto
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <div className="homepage-content">
        {/* Corrigindo o caminho da imagem do logo */}
        <img src="/img/Logo Porto.png" alt="Logo Porto" className="logo" />
        <SignInForm />
      </div>
      
      {/* Corrigindo o caminho da imagem lateral */}
      <div className="homepage-image">
        <img src="/img/side-img.png" alt="Mecânico e Cliente" className="side-image" />
      </div>
    </div>
  );
};

export default HomePage;

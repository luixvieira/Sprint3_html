// src/components/SignInForm/SignInForm.tsx
import React from 'react';
import './SignInForm.css';

const SignInForm: React.FC = () => {
  return (
    <div className="signin-container">
      <h2>Sign-in</h2>
      <div className="signin-section">
        <h3>Mecânico</h3>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Código porto mecânico" />
        <button>Entrar</button>
      </div>
      
      <div className="signin-section">
        <h3>Cliente</h3>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Código porto cliente" />
        <button>Entrar</button>
      </div>
      
      <p className="info-text">*O que é código porto?</p>
    </div>
  );
};

export default SignInForm;

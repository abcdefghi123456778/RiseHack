import React, { useState } from 'react';
import './Login.css';

// Placeholder SVG per il logo, sostituiscilo con il tuo vero logo
const RisehackLogo = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="login-logo-svg">
    <rect width="100" height="100" rx="20" fill="#2A2A38"/> {/* Sfondo del logo */}
    <path d="M50 25C48.2739 25 46.6173 25.5196 45.2751 26.4896C43.9328 27.4595 42.9776 28.8329 42.5434 30.4163C41.7098 33.4688 43.0581 36.5301 45.7587 38.2019L45.8825 38.2844L50 41.1875L54.1175 38.2844L54.2413 38.2019C56.9419 36.5301 58.2902 33.4688 57.4566 30.4163C57.0224 28.8329 56.0672 27.4595 54.7249 26.4896C53.3827 25.5196 51.7261 25 50 25Z" fill="url(#hoodieGradient)"/>
    <path d="M35 60C35 55.5817 38.5817 52 43 52H57C61.4183 52 65 55.5817 65 60V65H35V60Z" fill="url(#hoodieGradient)" />
    <text x="50" y="85" fontFamily="Arial, sans-serif" fontSize="14" fill="#FFFFFF" textAnchor="middle">RISEHACK</text>
    <defs>
      <linearGradient id="hoodieGradient" x1="50" y1="25" x2="50" y2="65" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A076F9"/> {/* Viola più chiaro */}
        <stop offset="1" stopColor="#6A35D9"/> {/* Viola più scuro */}
      </linearGradient>
    </defs>
  </svg>
);


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Qui andrebbe la logica di login
    console.log('Email:', email, 'Password:', password);
    alert('Login attempt (see console)');
  };

  const handleGoogleLogin = () => {
    // Qui andrebbe la logica per il login con Google
    alert('Continue with Google clicked');
  };

  return (
    <div className="login-page"> {/* Aggiunto position: relative; e overflow: hidden; nel CSS */}
      <div className="login-container">
        <div className="login-form-section">
          <h1 className="login-title">Login</h1>
          <form id="login-form-main" onSubmit={handleLogin}> {/* Aggiunto id per il bottone esterno */}
            <div className="login-input-group">
              <label htmlFor="email">EMAIL (*)</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div className="login-input-group">
              <label htmlFor="password">PASSWORD (*)</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
            <div className="login-links">
              <a href="#forgot-password">Forgot password?</a> {/* Usare # per link placeholder */}
              <span>Need an account? <a href="#register">Register</a></span> {/* Usare # per link placeholder */}
            </div>
            <button type="button" className="login-button google-button" onClick={handleGoogleLogin}>
              Continue with Google
            </button>
          </form>
        </div>

        <div className="login-info-section">
          <div className="login-logo-container">
            <RisehackLogo />
          </div>
          <button type="submit" form="login-form-main" className="login-button main-submit-button">
            Let's Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;

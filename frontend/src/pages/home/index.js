import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'; 

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <div className="lt">
          {/* Agrupando a imagem e o texto */}
          <div className="logo-container">
            {/* Importando a imagem da pasta "public" */}
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logoGlambeauty" className='logo'/>
          </div>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Produtos">Produtos</Link></li>
            <li><Link to="/Sobre">Sobre</Link></li>
            <li><Link to="/Atendimento">Atendimento</Link></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <div className="purple-box">
          <h2>FRETE GRÁTIS para todo Brasil</h2>
        </div>
      </section>
      <section className="content">
        <h1>Seja bem-vindo(a) à Glambeauty!</h1>
        <p>Conheça nossa linha exclusiva de produtos de beleza e bem-estar.</p>
      </section>
    </div>
  );
}

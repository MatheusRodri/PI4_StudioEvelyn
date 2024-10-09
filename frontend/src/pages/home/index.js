import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; 

export default function Home() {
  return (
    <div className="container">
      <header className="header">
          <nav className="nav">
                <Link className='link' to="/Login">Login</Link>
                <Link className='link' to="/Servicos">Serviços</Link>           
            </nav>
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logoGlambeauty" className='logo'/>
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

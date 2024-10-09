import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; 
import logo from '../../images/logo.png';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Logo do Site" className="logo" /> {/* Adiciona a imagem do logo */}
            <nav>
                <Link to="/">Home</Link>
                <Link to="/produtos">Produtos</Link>
                <Link to="/atendimento">Atendimento</Link>
            </nav>
        </header>
    );
}

export default Header;


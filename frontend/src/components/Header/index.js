import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; 

export default function Header() {
    return (
        <header className="header">
            <img src={process.env.PUBLIC_URL + 'images/logo.png'} alt="Logo do Site" className="logo" /> {/* Adiciona a imagem do logo */}
            <nav>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/produtos">Produtos</Link>
                <Link className='link' to="/login">Atendimento</Link>
            </nav>
        </header>
    );
}




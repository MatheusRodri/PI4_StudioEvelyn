import React from 'react';
import './index.scss'; // Importe o arquivo SCSS

function Sobre() {
  return (
    <div className="sobre-container">
      <div className="sobre-content">
        <h1>Quem Somos</h1>
        <p>Somos apaixonados por beleza e queremos compartilhar isso com você!</p>
        <p>Nossa missão é proporcionar uma experiência única e encantadora no universo da maquiagem, onde cada pessoa possa expressar sua beleza de forma autêntica.</p>
        <img src={process.env.PUBLIC_URL + '/mulheres.png'} alt={`imagemMulher$`} className='mulher'/>
        <h2>Nossa Visão</h2>
        <p>Queremos ser a sua primeira escolha quando se trata de produtos de beleza. Estamos comprometidos em oferecer uma ampla variedade de produtos de alta qualidade e as últimas tendências da moda.</p>
        <img src={process.env.PUBLIC_URL + '/maquiagens.png'} alt={`imagemMaquiagem$`} className='maquiagem'/>
        <h2>Nossos Valores</h2>
        <ul>
          <li><span>Paixão:</span> Amamos o que fazemos e estamos comprometidos em oferecer o melhor para nossos clientes.</li>
          <li><span>Inovação:</span> Estamos sempre em busca de novas ideias e tendências para garantir que nossos produtos estejam sempre atualizados.</li>
          <li><span>Empoderamento:</span> Acreditamos no poder da maquiagem para aumentar a autoconfiança e promover a autenticidade.</li>
          <li><span>Sustentabilidade:</span> Nos preocupamos com o meio ambiente e buscamos constantemente maneiras de reduzir nosso impacto ambiental.</li>
        </ul>
        <p>Venha fazer parte do nosso mundo de beleza e descubra o seu próprio estilo!</p>
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt={`imagemlogo$`} className='logo'/>
      </div>
    </div>
  );
}

export default Sobre;

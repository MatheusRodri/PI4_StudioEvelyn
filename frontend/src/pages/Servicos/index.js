import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'; // Importe o arquivo SCSS

function ProductPage() {
  // Array de produtos
  const products = [
    { name: 'Batom', price: 'R$ 20,00', description: 'Batom de longa duração', category: 'batom', image: '/batom.png' },
    { name: 'Demaquilante', price: 'R$ 30,00', description: 'Demaquilante para todos os tipos de pele', category: 'demaquilante', image: '/demaquilante.png' },
    { name: 'Blush', price: 'R$ 40,00', description: 'Blush em pó para um aspecto saudável', category: 'blush', image: '/blush.png' },
    { name: 'Base', price: 'R$ 50,00', description: 'Base de alta cobertura com efeito matte', category: 'base', image: '/base.png' },
    { name: 'Pó Compacto', price: 'R$ 25,00', description: 'Pó Compacto para selar a pele', category: 'po', image: '/po.png' },
    { name: 'Primer', price: 'R$ 45,00', description: 'Primer para realçar sua maquiagem', category: 'primer', image: '/primer.png' },
    { name: 'Sombra', price: 'R$ 32,00', description: 'Sombra de alta pigmentação', category: 'sombra', image: '/sombra.png' },
    { name: 'Delineador', price: 'R$ 18,00', description: 'Delineador preto', category: 'delineador', image: '/delineador.png' },
    { name: 'Gloss', price: 'R$ 23,00', description: 'Gloss labial rosa', category: 'gloss', image: '/gloss.png' },
    { name: 'Corretivo', price: 'R$ 31,00', description: 'Corretivo cor 02', category: 'corretivo', image: '/corretivo.png' }
  ];

  return (
    <div className="container">
      <div className="sessao">
        <h2>Nossa linha exclusiva de maquiagens!</h2>
        <div className="produtos">
          {products.map((product, index) => (
            <div key={index} className={`produto ${product.category}`}>
              <h3>{product.name}</h3>
              {product.category === 'blush' && product.name === 'Blush' && (
                <img src={process.env.PUBLIC_URL + '/blush.png'} alt={`imagemBlush${product.name}`} className='blush'/>
              )}
              {product.category === 'demaquilante' && product.name === 'Demaquilante' && (
                <img src={process.env.PUBLIC_URL + '/demaquilante.png'} alt={`imagemDemaquilante${product.name}`}className='demaquilante'/>
              )}
              {product.category === 'batom' &&  product.name === 'Batom' && (
                <img src={process.env.PUBLIC_URL + '/batom.png'} alt={`imagemBatom${product.name}`}className='batom'/>
              )}
              {product.category === 'base' &&  product.name === 'Base' && (
                <img src={process.env.PUBLIC_URL + '/base.png'} alt={`imagemBase${product.name}`}className='base'/>
              )}
              {product.category === 'po' &&  product.name === 'Pó Compacto' && (
                <img src={process.env.PUBLIC_URL + '/po.png'} alt={`imagemBase${product.name}`}className='po'/>
              )}
              {product.category === 'primer' &&  product.name === 'Primer' && (
                <img src={process.env.PUBLIC_URL + '/primer.png'} alt={`imagemBase${product.name}`}className='primer'/>
              )}
              {product.category === 'sombra' &&  product.name === 'Sombra' && (
                <img src={process.env.PUBLIC_URL + '/sombra.png'} alt={`imagemBase${product.name}`}className='sombra'/>
              )}
              {product.category === 'delineador' &&  product.name === 'Delineador' && (
                <img src={process.env.PUBLIC_URL + '/delineador.png'} alt={`imagemBase${product.name}`}className='delineador'/>
              )}
              {product.category === 'gloss' &&  product.name === 'Gloss' && (
                <img src={process.env.PUBLIC_URL + '/gloss.png'} alt={`imagemBase${product.name}`}className='gloss'/>
              )}
              {product.category === 'corretivo' &&  product.name === 'Corretivo' && (
                <img src={process.env.PUBLIC_URL + '/corretivo.png'} alt={`imagemBase${product.name}`}className='corretivo'/>
              )}
              <p>{product.description}</p>
              <span>{product.price}</span>
            </div>
          ))}
        </div>
    
        <div className="alerta">
          <p>
            Atenção: Para comprar qualquer um de nossos produtos, entre em contato com a nossa 
            <Link to="/atendimento#central-de-atendimento"> central de atendimento </Link>
            para realizarmos seu cadastro em nossa plataforma! Informe seu nome, endereço, e-mail e o produto que deseja comprar.
          </p>
        </div>
      </div>
      {/* Seção da Central de Atendimento */}
      <div id="central-de-atendimento" className="central-de-atendimento">
        {/* Conteúdo da Central de Atendimento */}
      </div>
    </div>
  );
}

export default ProductPage;

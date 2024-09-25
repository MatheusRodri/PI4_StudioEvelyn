import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'; // Importe o arquivo SCSS

function ProductPage() {
  // Array de produtos
  const products = [
    { name: 'Brasileiro', price: 'R$ 130,00', description: 'Volume de cílios em formato Y', category: 'brasileiro', image: '/brasileiro.png' },
    { name: 'Combo', price: 'R$ 180,00', description: 'Combo de Cílios Volume Russo + Design de Sobrancelha', category: 'combo', image: '/combo.png' },
    { name: 'Design', price: 'R$ 35,00', description: 'Design de Sobrancelhas', category: 'design', image: '/design.png' },
    { name: 'Fox', price: 'R$ 190,00', description: 'Volume de Cílios estilo Fox Eyes, realça o olhar!', category: 'fox', image: '/fox.png' },
    { name: 'Henna', price: 'R$ 45,00', description: 'Design de Sobrancelhas + aplicação Henna', category: 'henna', image: '/henna.png' },
    { name: 'Hibrido', price: 'R$ 130,00', description: 'Volume de cílios com menos volume em comparação com o Volume Russo, o segundo modelo de cílios mais natural do nosso catálogo!', category: 'hibrido', image: '/hibrido.png' },
    { name: 'Labio', price: 'R$ 200,00', description: 'Micropigmentação Labial, a cor você escolhe!', category: 'labio', image: '/labio.png' },
    { name: 'Mega', price: 'R$ 160,00', description: 'Mega Volume, o modelo mais volumoso do nosso catálogo!', category: 'mega', image: '/mega.png' },
    { name: 'Micropigmentacao', price: 'R$ 250,00', description: 'Micropigmentação fio a fio, modelo de micropigmentação mais natural do nosso catálogo!', category: 'micropigmentacao', image: '/micropigmentacao.png' },
    { name: 'Natural', price: 'R$ 100,00', description: 'Volume Fio a Fio, o modelo mais natural do nosso catálogo!', category: 'natural', image: '/natual.png' },
    { name: 'Shadow', price: 'R$ 280,00', description: 'Modelo de micropigmentação com o maior destaque do nosso catálogo!', category: 'shadow', image: '/shadow.png' },
    { name: 'Russo', price: 'R$ 150,00', description: 'Volume o russo, o segundo modelo mais volumoso do nosso catálogo!', category: 'russo', image: '/natual.png' }
  ];

  return (
    <div className="container">
      <div className="sessao">
        <h2>Nossa linha exclusiva de maquiagens!</h2>
        <div className="produtos">
          {products.map((product, index) => (
            <div key={index} className={`produto ${product.category}`}>
              <h3>{product.name}</h3>
              {product.category === 'brasileiro' && product.name === 'Brasileiro' && (
                <img src={process.env.PUBLIC_URL + '/brasileiro.png'} alt={`imagemBlush${product.name}`} className='brasileiro'/>
              )}
              {product.category === 'combo' && product.name === 'Combo' && (
                <img src={process.env.PUBLIC_URL + '/combo.png'} alt={`imagemDemaquilante${product.name}`}className='combo'/>
              )}
              {product.category === 'design' &&  product.name === 'Design' && (
                <img src={process.env.PUBLIC_URL + '/design.png'} alt={`imagemBatom${product.name}`}className='design'/>
              )}
              {product.category === 'henna' &&  product.name === 'Henna' && (
                <img src={process.env.PUBLIC_URL + '/henna.png'} alt={`imagemBase${product.name}`}className='henna'/>
              )}
              {product.category === 'hibrido' &&  product.name === 'Hibrido' && (
                <img src={process.env.PUBLIC_URL + '/hibrido.png'} alt={`imagemBase${product.name}`}className='hibrido'/>
              )}
              {product.category === 'labio' &&  product.name === 'Labio' && (
                <img src={process.env.PUBLIC_URL + '/labio.png'} alt={`imagemBase${product.name}`}className='labio'/>
              )}
              {product.category === 'mega' &&  product.name === 'Mega' && (
                <img src={process.env.PUBLIC_URL + '/mega.png'} alt={`imagemBase${product.name}`}className='mega'/>
              )}
              {product.category === 'micropigmentacao' &&  product.name === 'Micropigmentacao' && (
                <img src={process.env.PUBLIC_URL + '/micropigmentacao.png'} alt={`imagemBase${product.name}`}className='micropigmentacao'/>
              )}
              {product.category === 'natural' &&  product.name === 'Natural' && (
                <img src={process.env.PUBLIC_URL + '/natural.png'} alt={`imagemBase${product.name}`}className='natural'/>
              )}
              {product.category === 'shadow' &&  product.name === 'Shadow' && (
                <img src={process.env.PUBLIC_URL + '/shadow.png'} alt={`imagemBase${product.name}`}className='shadow'/>
              )}
              {product.category === 'russo' &&  product.name === 'Russo' && (
                <img src={process.env.PUBLIC_URL + '/russo.png'} alt={`imagemBase${product.name}`}className='russo'/>
              )}
              {product.category === 'fox' &&  product.name === 'Fox' && (
                <img src={process.env.PUBLIC_URL + '/fox.png'} alt={`imagemBase${product.name}`}className='fox'/>
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

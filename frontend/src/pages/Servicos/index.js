import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Importe o arquivo SCSS
import CardProcedimento from '../../components/CardProcedimento';

function ProductPage() {
  // Array de produtos
  const products = [
    { name: 'Brasileiro', price: 'R$ 130,00', description: 'Volume de cílios em formato Y', category: 'brasileiro', image: '/images/brasileiro.png' },
    { name: 'Combo', price: 'R$ 180,00', description: 'Combo de Cílios Volume Russo + Design de Sobrancelha', category: 'combo', image: '/images/combo.png' },
    { name: 'Design', price: 'R$ 35,00', description: 'Design de Sobrancelhas', category: 'design', image: '/images/design.png' },
    { name: 'Fox', price: 'R$ 190,00', description: 'Volume de Cílios estilo Fox Eyes, realça o olhar!', category: 'fox', image: '/images/fox.png' },
    { name: 'Henna', price: 'R$ 45,00', description: 'Design de Sobrancelhas + aplicação Henna', category: 'henna', image: '/images/henna.png' },
    { name: 'Hibrido', price: 'R$ 130,00', description: 'Volume de cílios com menos volume em comparação com o Volume Russo, o segundo modelo de cílios mais natural do nosso catálogo!', category: 'hibrido', image: '/images/hibrido.png' },
    { name: 'Labio', price: 'R$ 200,00', description: 'Micropigmentação Labial, a cor você escolhe!', category: 'labio', image: '/images/labio.png' },
    { name: 'Mega', price: 'R$ 160,00', description: 'Mega Volume, o modelo mais volumoso do nosso catálogo!', category: 'mega', image: '/images/mega.png' },
    { name: 'Micropigmentacao', price: 'R$ 250,00', description: 'Micropigmentação fio a fio, modelo de micropigmentação mais natural do nosso catálogo!', category: 'micropigmentacao', image: '/images/micropigmentacao.png' },
    { name: 'Natural', price: 'R$ 100,00', description: 'Volume Fio a Fio, o modelo mais natural do nosso catálogo!', category: 'natural', image: '/images/natural.png' },
    { name: 'Shadow', price: 'R$ 280,00', description: 'Modelo de micropigmentação com o maior destaque do nosso catálogo!', category: 'shadow', image: '/images/shadow.png' },
    { name: 'Russo', price: 'R$ 150,00', description: 'Volume o russo, o segundo modelo mais volumoso do nosso catálogo!', category: 'russo', image: '/images/natural.png' }
  ];

  // Renderização do componente
  
  return (
    <div className="container">
      <div className="sessao">
        <div className="servicos">
          {
            products.map((procedimento, index) => (
              <CardProcedimento key={index} procedimento={procedimento} />
            ))
          }
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

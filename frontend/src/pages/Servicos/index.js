import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; 
import CardProcedimento from '../../components/cardProcedimento';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
    { name: 'Russo', price: 'R$ 150,00', description: 'Volume o russo, o segundo modelo mais volumoso do nosso catálogo!', category: 'russo', image: '/images/russo.png' },
    { name: 'Completo', price: 'R$ 200,00', description: 'O combo mais completo de nosso catálogo! Cílios, sobrancelha e micropigmentação!', category: 'completo', image: '/images/completo.png' },
    { name: 'Kardashian', price: 'R$ 150,00', description: 'Volume estilo Kim Kardashian!', category: 'kardashian', image: '/images/kardashian.png' },
    { name: 'Labio Natural', price: 'R$ 250,00', description: 'Micropigmentação labial mais natural', category: 'labionatural', image: '/images/labionatural.png' }
  ];

  // Renderização do componente
  
  return (
    <>
    <Header/>

    <div className="container">
      
         <div className='servicos'>
         {
            products.map((procedimento, index) => (
              <CardProcedimento key={index} procedimento={procedimento} />
            ))
          }
        
         </div>
  
    </div>





        <Footer/>
    </>
    
  );
}

export default ProductPage;

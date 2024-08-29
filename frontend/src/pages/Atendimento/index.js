import React from 'react';
import './index.scss'; // Importe o arquivo SCSS

function Atendimento() {
  // Array de FAQs (removendo a pergunta sobre rastreamento de pedidos)
  const faqs = [
    {
      question: 'Qual é o prazo de entrega?',
      answer: 'O prazo de entrega varia de acordo com a sua localização. Normalmente, leva de 3 a 7 dias úteis.'
    },
    {
      question: 'Posso devolver um produto?',
      answer: 'Sim, aceitamos devoluções em até 30 dias após a compra, desde que o produto esteja em sua embalagem original.'
    }
  ];

  return (
    <div className="central-container">
      <h1>Central de Atendimento</h1>
      <section className="contact-info">
        <h2>Informações de Contato</h2>
        <p>Telefone: (11) 1234-5678</p>
        <p>Email: atendimento@glambeauty.com.br</p>
        <p>Endereço: Rua da Beleza, 123, São Paulo - SP</p>
        {/* Mensagem como um alerta */}
        <div className="alert">
          <p>Para realizar seu pedido, entre em contato com um de nossos canais de atendimento acima.</p>
        </div>
      </section>
      <section className="faq">
        <h2>Perguntas Frequentes</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Atendimento;

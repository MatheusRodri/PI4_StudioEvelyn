import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './index.css';

function AgendamentoDetalhe() {
  // Exemplo de dados do agendamento, que vai vir da API
  const agendamento = {
    nomeUsuario: 'Emily',
    servico: 'Cílios',
    data: '2024-11-01',
    horario: '15:00',
  };

  return (
    <div>
      <Header />
      <div className="detalhe-container">
        <h2>Detalhes do Agendamento</h2>
        <p><strong>Nome do Usuário:</strong> {agendamento.nomeUsuario}</p>
        <p><strong>Serviço:</strong> {agendamento.servico}</p>
        <p><strong>Data:</strong> {agendamento.data}</p>
        <p><strong>Horário:</strong> {agendamento.horario}</p>
      </div>
      <Footer />
    </div>
  );
}

export default AgendamentoDetalhe;

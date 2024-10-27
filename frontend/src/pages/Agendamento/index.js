import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './index.css'; 

function Agendamento() {
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [servicosSelecionados, setServicosSelecionados] = useState([]);
  const servicos = [
    { id: 1, nome: 'Cílios' },
    { id: 2, nome: 'Labios' },
    { id: 2, nome: 'Sobrancelha' }
  ];

  const handleAgendar = () => {
    fetch('/api/agendamentos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data, horario, servicosSelecionados }),
    })
      .then(response => response.json())
      .then(data => console.log('Agendamento realizado com sucesso:', data))
      .catch(error => console.error('Erro ao agendar:', error));
  };

  return (
    <div>
      <Header />
      <div className="agendamento-container">
        <h2>Agendamento</h2>
        <label>
          Data:
          <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
        </label>
        <label>
          Horário:
          <input type="time" value={horario} onChange={(e) => setHorario(e.target.value)} />
        </label>
        <h3>Serviços:</h3>
        <ul className="servicos-list">
          {servicos.map(servico => (
            <li key={servico.id}>
              <label>
                <input
                  type="checkbox"
                  value={servico.id}
                  checked={servicosSelecionados.includes(servico.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setServicosSelecionados([...servicosSelecionados, servico.id]);
                    } else {
                      setServicosSelecionados(servicosSelecionados.filter(id => id !== servico.id));
                    }
                  }}
                />
                {servico.nome}
              </label>
            </li>
          ))}
        </ul>
        <button onClick={handleAgendar}>Agendar</button>
      </div>
      <Footer />
    </div>
  );
}

export default Agendamento;

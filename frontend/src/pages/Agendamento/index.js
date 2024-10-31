import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './index.css';
import servicos from '../../services/servicos';
import { auth, db } from '../../services/firebaseConfig';
import { doc,getDoc } from 'firebase/firestore';

function Agendamento() {
  // Estados para data, horário e serviços selecionados.
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [servicosSelecionados, setServicosSelecionados] = useState([]);
  const [pagamento, setPagamento] = useState('');
  const [usuario, setUsuario] = useState(null);
  const [total, setTotal] = useState(0)

  const formaPagamento = (e) => {
    setPagamento(e.target.value);
  }

  const fetchUserDetails = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const refDoc = doc(db, 'users', user.uid);
        const docSnap = await getDoc(refDoc);
        if (docSnap.exists()) {
          setUsuario(docSnap.data());
        }
      }
    })
  }

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const handleAgendar = async () => {
    // Junta os serviços selecionados em uma string separada por vírgulas.
    const procedimentos = servicosSelecionados.join(', ');

    try {
      await fetch('http://127.0.0.1:5000/agendamentos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          CPF: usuario.cpf,
          NOME: usuario.nome,
          DATA: data,
          HORA: horario,
          VALOR: total,
          PROCEDIMENTO: procedimentos,
          TP_PAGAMENTO: pagamento
      }),
      });
      console.log(servicosSelecionados)

      alert('Agendamento realizado com sucesso!');

    } catch (error) {
      console.error('Erro ao agendar:', error);
    
    }
  };

  useEffect(() => {
    const total = servicosSelecionados.reduce((acc, servicoName) => {
      const servico = servicos.find((servico) => servico.name === servicoName);
      const price = servico ? parseFloat(servico.price.replace(/[^0-9,]/g, '').replace(',', '.')) : 0;
      return acc + price;
    }, 0);
    setTotal(total);
    console.log(total)
  }, [servicosSelecionados]);

  return (
    <div>
      <Header />
      <div className="agendamento-container">
        <h2>Agendamento</h2>
        {/* Input para data. */}
        <label>
          Data:
          <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
        </label>
        {/* Input para horário. */}
        <label>
          Horário:
          <input type="time" value={horario} onChange={(e) => setHorario(e.target.value)} />
        </label>
        <h3>Serviços:</h3>
        {/* Lista de serviços. */}
        <ul className="servicos-list">
          
          {servicos.map(servico => (
            <li key={servico.name}> {/* Usa li para itens de lista. */}
              <label>
                <input
                  type="checkbox"
                  value={servico.name}
                  checked={servicosSelecionados.includes(servico.name)}
                  onChange={(e) => {
                    const valor = e.target.value;
                    setServicosSelecionados(prevState =>
                      prevState.includes(valor)
                        ? prevState.filter(item => item !== valor)
                        : [...prevState, valor]
                    );
                  }}
                />
                {servico.name}
                <br/>
                R${servico.price}
              </label>
            </li>
          ))}
        </ul>
        
        <label for="servicos">Forma de pagamento</label>
        <select id="servicos" name="servicos" value={pagamento} onChange={formaPagamento}>
          <option value="Pix">Pix</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de debito">Cartão de debito</option>
          <option value="Cartão de credito">Cartão de credito</option>
          
        </select>
        {/* Botão para agendar. */}
        <button onClick={handleAgendar}>Agendar</button>
      </div>
      <Footer />
    </div>
  );
}

export default Agendamento;


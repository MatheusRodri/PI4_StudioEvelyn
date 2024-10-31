import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './index.css';
import axios from 'axios';
import { auth,db } from '../../services/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function AgendamentoDetalhe() {
  const [usuario, setUsuario] = useState([]);
  const [dados,setDados] = useState([])
  // Exemplo de dados do agendamento, que vai vir da API
  

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



  const carregarUsuarios = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/agendamentos/cliente/${usuario.cpf}`)
      // console.log("response",response.data)
      setDados(response.data)
    }catch(error){
      console.error('Erro ao carregar usuários:', error);
    }
  };
  const carregarProcedimentosTodos = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/agendamentos`)
      // console.log("response",response.data)
      setDados(response.data)
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    }
  };


  useEffect(() => {
    fetchUserDetails() 
  }, []);

  useEffect(() => {
    if (usuario.permissao == 1) {
      carregarProcedimentosTodos();
    } else {
      carregarUsuarios()
    }
  }, [usuario]);

  return (
    <div>
      <Header />
      <h2>Detalhes do Agendamento</h2>
      <p>{usuario.cpf}</p>
      {
        dados.map((agendamento) => {
          return (
            <div className="detalhe-container">
              <p><strong>Nome do Usuário:</strong> {agendamento.NOME}</p>
              <p><strong>Serviço:</strong> {agendamento.PROCEDIMENTO}</p>
              <p><strong>Data:</strong> {agendamento.DATA}</p>
              <p><strong>Horário:</strong> {agendamento.HORA}</p>
              <p><strong>Valor:</strong> {agendamento.VALOR}</p>
              <p><strong>Forma de pagamento:</strong> {agendamento.TP_PAGAMENTO}</p>
            </div>
          );
        })
      }
      <button>
        <Link to="/agendamento">Voltar</Link>
      </button>
      <Footer />
    </div>
  );
}

export default AgendamentoDetalhe;

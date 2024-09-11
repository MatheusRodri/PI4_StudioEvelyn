import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/global'; 
import styled from 'styled-components';
import Form from './components/Form.js';
import Grid from './components/Grid';
import UserConsultPage from './pages/UserConsultPage';
import Home from './pages/home';
import Login from './pages/Login';
import Senha from './pages/Senha';
import Servicos from './pages/Servicos';
import Sobre from './pages/Sobre';
import Atendimento from './pages/Atendimento';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import CadastroUsuario from './components/CadastroUsuario.js';


const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #ffffff; /* Define um fundo branco para o container */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #333; /* Cor do texto do título */
`;

function App() {
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Cadastro de Sessão</Title>
        <Routes> 
          <Route exact path="/" element={<Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />} /> 
          <Route path="/consult-users" element={<UserConsultPage />} /> 
        </Routes>
        <Grid setOnEdit={setOnEdit} users={users} setUsers={setUsers} />
        <ToastContainer autoClose={3000} position="bottom-left" />
      </Container>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/senha" element={<Senha />} />
        <Route path="/app" element={<App />} />
        <Route path='/servicos' element={<Servicos />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/atendimento' element={<Atendimento />} />
        <Route path='/cadastrousuario' element={<CadastroUsuario/>} />
       </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

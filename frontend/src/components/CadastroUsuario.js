import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CadastroUsuario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [usuarios, setUsuarios] = useState([]);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);

  useEffect(() => {
    carregarUsuarios();
  }, []);

  const carregarUsuarios = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/usuarios');
      setUsuarios(response.data);
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const usuario = { nome, email, endereco };

    try {
      if (modoEdicao) {
        await axios.put(`http://127.0.0.1:5000/usuarios/${usuarioSelecionado.id}`, usuario);
        alert('Usuário atualizado com sucesso!');
      } else {
        await axios.post('http://127.0.0.1:5000/usuarios', usuario);
        alert('Usuário cadastrado com sucesso!');
      }
      setNome('');
      setEmail('');
      setEndereco('');
      setModoEdicao(false);
      setUsuarioSelecionado(null);
      carregarUsuarios();
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao cadastrar usuário.');
    }
  };

  const handleExcluirUsuario = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/usuarios/${id}`);
      alert('Usuário excluído com sucesso!');
      carregarUsuarios();
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
      alert('Erro ao excluir usuário.');
    }
  };

  const handleEditarUsuario = async (id) => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/usuarios/${id}`);
      console.log(response.data[0].nome);
      setNome(response.data[0].nome);
      setEmail(response.data[0].email);
      setEndereco(response.data[0].endereco);
      setModoEdicao(true);
      setUsuarioSelecionado(response.data[0]);
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      alert('Erro ao buscar usuário.');
    }
  };

  return (
    <div>
      <h2>{modoEdicao ? 'Editar Usuário' : 'Cadastro de Usuário'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Endereço:</label>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
        </div>
        <button type="submit">{modoEdicao ? 'Editar' : 'Cadastrar'}</button>
      </form>

      <h2>Usuários Cadastrados</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nome}</td>
              <td>{usuario.email}</td>
              <td>{usuario.endereco}</td>
              <td>
                <button onClick={() => handleExcluirUsuario(usuario.id)}>Excluir</button>
                <button onClick={() => handleEditarUsuario(usuario.id)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CadastroUsuario;

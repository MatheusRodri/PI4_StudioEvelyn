import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  word-break: break-all;
  margin-bottom: 20px;
`;

const Thead = styled.thead``;

const Tbody = styled.tbody``;

const Tr = styled.tr``;

const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
`;

const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
`;

const Button = styled.button`
  margin-left: 10px;
`;

const UserConsultPage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3306/users");
      setUsers(res.data);
      setFilteredUsers(res.data);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleSearch = () => {
    let filtered = users;

    // Verifica se o searchTerm está definido e aplica o filtro
    if (searchTerm) {
      filtered = filtered.filter(
        (user) =>
          user.nome.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Verifica se o selectedMonth está definido e aplica o filtro
    if (selectedMonth) {
      filtered = filtered.filter(
        (user) =>
          new Date(user.data_agendamento).getMonth() ===
          parseInt(selectedMonth) - 1
      );
    }

    // Atualiza os usuários filtrados
    setFilteredUsers(filtered);
  };

  const handleFilterByMonth = (month) => {
    setSelectedMonth(month);
  };

  return (
    <Container>
      <Title>Consulta de Usuários</Title>
      <div>
        <input
          type="text"
          placeholder="Pesquisar por nome"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedMonth}
          onChange={(e) => handleFilterByMonth(e.target.value)}
        >
          <option value="">Filtrar por mês</option>
          <option value="1">Janeiro</option>
          <option value="2">Fevereiro</option>
          <option value="3">Março</option>
          <option value="4">Abril</option>
          <option value="5">Maio</option>
          <option value="6">Junho</option>
          <option value="7">Julho</option>
          <option value="8">Agosto</option>
          <option value="9">Setembro</option>
          <option value="10">Outubro</option>
          <option value="11">Novembro</option>
          <option value="12">Dezembro</option>
        </select>
        <Button onClick={handleSearch}>Consultar</Button>
      </div>
      <Table>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Email</Th>
            <Th>endereço</Th>
            <Th>Data de Agendamento</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* Exibe todos os usuários se filteredUsers estiver vazio */}
          {filteredUsers.length === 0 ? (
            <Tr>
              <Td colSpan="5">Nenhum usuário encontrado.</Td>
            </Tr>
          ) : (
            // Exibe os usuários filtrados
            filteredUsers.map((user) => (
              <Tr key={user.id}>
                <Td>{user.nome}</Td>
                <Td>{user.email}</Td>
                <Td>{user.data_agendamento}</Td>
              </Tr>
            ))
          )}
        </Tbody>
      </Table>
    </Container>
  );
};

export default UserConsultPage;

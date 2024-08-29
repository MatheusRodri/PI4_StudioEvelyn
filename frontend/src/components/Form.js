import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import axios from "axios";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-start; 
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px; 
`;

const Input = styled.input`
  width: 220px; 
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label`
  margin-bottom: 5px; 
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const ExitButton = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #ff4d4f;
  color: white;
  height: 42px;
  margin-left: 10px;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();
  const formRef = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.endereco.value = onEdit.endereco;
      user.produtos.value = onEdit.produtos; 
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (!user.nome.value || !user.email.value || !user.endereco.value  || !user.produtos.value) { 
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, { 
          nome: user.nome.value,
          email: user.email.value,
          endereco: user.endereco.value,
          produtos: user.produtos.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", { 
          nome: user.nome.value,
          email: user.email.value,
          endereco: user.endereco.value,
          produtos: user.produtos.value, 
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.nome.value = "";
    user.email.value = "";
    user.endereco.value = ""; 
    user.produtos.value = "";

    setOnEdit(null);
    getUsers();
  };

  const handleSubmit2 = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    console.log(data)

    try {
        const response = await axios.post('http://127.0.0.1:5000/usuarios', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Usuário salvo com sucesso:', response.data);
    } catch (error) {
        console.error('Erro:', error.response ? error.response.data : error.message);
    }
};

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email" />
      </InputArea>

      <InputArea>
        <Label>Endereço</Label>
        <Input name="endereco" type="text" /> 
      </InputArea>

      <Button type="submit">SALVAR</Button>
      <ExitButton type="button" onClick={handleSubmit2}>SAIR</ExitButton>
    </FormContainer>
  );
};

export default Form;

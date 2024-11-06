import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../services/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';


export default function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');

  const nav = useNavigate()


  async function handleRegister(e) {
    e.preventDefault()
    if (!email || !password || !nome || !cpf) {
      alert('Preencha todos os campos')
      return
    } else if (password.length < 6) {
      alert('A senha deve ter no mínimo 6 caracteres')
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, password)
        const user = auth.currentUser;
        if (user) {
          await setDoc(doc(db, 'users', user.uid), {
            nome: nome,
            cpf: cpf,
            email: email,
            permissao: 0
          })
          alert('Usuário cadastrado com sucesso!')
          nav("/login")
        }

      } catch (e) {
        console.log(e)
      }
    }
  }

  const formatarCPF = (valor) => {
    // Remover todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Adicionar o formato XXX.XXX.XXX-XX
    if (valor.length <= 3) {
      return valor;
    } else if (valor.length <= 6) {
      return valor.replace(/(\d{3})(\d{1,})/, '$1.$2');
    } else if (valor.length <= 9) {
      return valor.replace(/(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3');
    } else {
      return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,})/, '$1.$2.$3-$4');
    }


  };




  return (
    <>
      <Header />
      <main className='register-page'>
        <section className='register-container'>
          <h2 style={{ fontFamily: 'Arial, sans-serif' }}>REGISTRO</h2>
          <form id='register-form' onSubmit={handleRegister}>
            <input onChange={(e) => setNome(e.target.value)} value={nome} type='nome' id='nome' name='nome' placeholder='Nome' /><br />
            <input maxLength={14} onChange={(e) => setCpf(formatarCPF(e.target.value)) } value={cpf} type='cpf' id='cpf' name='cpf' placeholder='CPF' /><br />
            <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' id='email' name='email' placeholder='Endereço de E-mail' /><br />
            <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' id='password' name='password' placeholder='Senha' /><br />
            <input type='submit' value='REGISTRAR' />
          </form>
          <Link to="/login">Já tem conta?</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

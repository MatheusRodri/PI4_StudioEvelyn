import './index.scss';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../services/firebaseConfig';
import {doc,setDoc} from 'firebase/firestore';


export default function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  

async function handleRegister(e) {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      const user = auth.currentUser;
      console.log(user)
      if(user){
        await setDoc(doc(db, 'users', user.uid), {
          nome: nome,
          cpf: cpf,
          email: email,
          permissao: 0
        })
      }

    }catch(e){
      console.log(e)
    }
  }


  

  return (
    <>
    <Header />
    <div className='login-page'>
      <div className='login-container'>
        <h2 style={{ fontFamily: 'Arial, sans-serif' }}>REGISTRO</h2>
          <form id='login-form' onSubmit={handleRegister}>
            <input onChange={(e) => setNome(e.target.value)} value={nome} type='nome' id='nome' name='nome' placeholder='Nome'/><br />
            <input onChange={(e) => setCpf(e.target.value)} value={cpf} type='cpf' id='cpf' name='cpf' placeholder='CPF' /><br />
            <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' id='email' name='email' placeholder='Endereço de E-mail' /><br />
            <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' id='password' name='password' placeholder='Senha' /><br />                    
          <input type='submit' value='REGISTRAR' />
        </form>
        <Link to="/login">Já tem conta?</Link>
      </div>
    </div>
    <Footer/>
    </>
  );
}

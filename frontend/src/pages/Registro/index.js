import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, updateCurrentUser } from 'firebase/auth';
import { auth, db } from '../../services/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import axios from 'axios';

export default function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  

  const nav = useNavigate()


  async function handleRegister(e) {
    e.preventDefault()
    if (!email || !password || !nome) {
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
            displayName: nome,
            email: email,
            permissao: 0
          })
        }
          alert('Usuário cadastrado com sucesso!')
        nav("/login")

      } catch (e) {
        console.log(e)
      }
    }
  }

  async function handleLoginGoogle() {
    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      console.log(result.user);


    } catch (error) {

    }
  }

  async function handleLoginFacebook() {
    try {
      const provider = new FacebookAuthProvider();

      const result = await signInWithPopup(auth, provider);

      console.log(result.user);


    } catch (error) {

    }
  }
  
  return (
    <>
      <Header />
      <main className='register-page'>
        <section className='register-container'>
          <h2 style={{ fontFamily: 'Arial, sans-serif' }}>REGISTRO</h2>
          <form id='register-form' onSubmit={handleRegister}>
            <input onChange={(e) => setNome(e.target.value)} value={nome} type='nome' id='nome' name='nome' placeholder='Nome' /><br />
            <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' id='email' name='email' placeholder='Endereço de E-mail' /><br />
            <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' id='password' name='password' placeholder='Senha' /><br />
            <input type='submit' value='REGISTRAR' />
          </form>
          <p>ou</p>
          <div className='redes'>
            
            <button className='google-button button-midias' onClick={handleLoginGoogle}>
              <span className='google-icon'>
                <FaGoogle />
              </span>
              
              Registrar com Google
            </button>
            <button className='facebook-button button-midias' onClick={handleLoginFacebook}>
              <span className='facebook-icon'>
                <FaFacebook />
              </span>
              Registrar com Facebook
            </button>
          </div>
          <Link to="/login">Já tem conta?</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

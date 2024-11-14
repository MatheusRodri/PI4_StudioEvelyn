import './login.scss';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import { auth } from '../../services/firebaseConfig';
import { signInWithEmailAndPassword,GoogleAuthProvider,FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nav = useNavigate();

  // Função de login com email e senha
  async function handleLogin(e) {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      nav('/agendamentos');
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleLoginGoogle() {
    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      nav('/agendamentos');


    } catch (error) {
      
    }
  }

  async function handleLoginFacebook() {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
      nav('/agendamentos');
    } catch (error) {

    }
  }

  return (
    <>
      <Header />
      <main className='login-page'>
        <section className='login-container'>
          <h2 style={{ fontFamily: 'Arial, sans-serif' }}>LOGIN</h2>
          <form id='login-form' onSubmit={handleLogin}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type='email'
              id='email'
              name='email'
              placeholder='Endereço de E-mail'
              required
            />
            <br />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type='password'
              id='password'
              name='password'
              placeholder='Senha'
              required
            />
            <br />
            <br />
            <input type='submit' value='Entrar' />
          </form>

          <p>ou</p>
          <div className='redes'>

            <button className='google-button button-midias' onClick={handleLoginGoogle}>
              <span className='google-icon'>
                <FaGoogle />
              </span>

              Entrar com Google
            </button>
            <button className='facebook-button button-midias' onClick={handleLoginFacebook}>
              <span className='facebook-icon'>
                <FaFacebook />
              </span>
              Entrar com Facebook
            </button>
          </div>


          <Link to="/registro">Registrar</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

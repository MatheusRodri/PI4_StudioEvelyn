import './login.scss';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { auth } from '../../services/firebaseConfig';
import { signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [usuario, setUsuario] = useState({});

  const nav = useNavigate();

  // Função de login com email e senha
  async function handleLogin(e) {
    e.preventDefault();

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('usuario', JSON.stringify(result.user));
      JSON.stringify();

      nav('/agendamentos');
    } catch (error) {
      alert('E-mail ou senha inválidos');
    }
  }

  async function handleLoginGoogle() {
    try {
      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      localStorage.setItem('usuario', JSON.stringify(result.user));

      nav('/agendamentos');


    } catch (error) {

    }
  }

  async function handleLoginFacebook() {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem('usuario', JSON.stringify(result.user));
      nav('/agendamentos');
    } catch (error) {

    }
  }

  useEffect(() => {
    const cachedUser = JSON.parse(localStorage.getItem('usuario'));
    if (cachedUser) {
      setUsuario(cachedUser);
      nav('/agendamentos');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

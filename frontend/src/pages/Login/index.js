import './login.scss';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';
import { auth } from '../../services/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nav = useNavigate()
  
  
  async function handleLogin(e){
    try {
      e.preventDefault()
      await signInWithEmailAndPassword(auth, email, password)
      nav('/agendamentos')
    } catch (e) {
      alert('Email ou senha incorretos')
    }
  }

  return (
    <>
    <Header />
      <div className='login-page'>
        <div className='login-container'>
          <h2 style={{ fontFamily: 'Arial, sans-serif' }}>LOGIN</h2>
          <form id='login-form' onSubmit={handleLogin}>
            <input onChange={(e)=>setEmail(e.target.value)} value={email}  type='email' id='email' name='email' placeholder='Endereço de E-mail' required /><br />
            <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' id='password' name='password' placeholder='Senha' required /><br />                    
            <input type='submit' value='Entrar' />
          </form>
          <Link to="/registro">Registrar</Link>
        </div>
      </div>
    <Footer/>
    </>
  );
}

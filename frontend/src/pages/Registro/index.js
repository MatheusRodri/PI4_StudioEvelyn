import './index.scss';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


export default function Registro() {
  const handleLogin = (event) => {
    event.preventDefault();

    const nome = event.target.email.value;
    const email = event.target.email.value;
    const password = event.target.password.value;


    if (email === 'studio@gmail.com' && password === '2121') {

      window.location.href = '/cadastrousuario';
    } else {

      alert('Email ou senha incorretos. Tente novamente.');
    }
  };

  return (
    <>
    <Header />
    <div className='login-page'>
      <div className='login-container'>
        <h2 style={{ fontFamily: 'Arial, sans-serif' }}>REGISTRO</h2>
        <form id='login-form' onSubmit={handleLogin}>
          <input type='nome' id='nome' name='nome' placeholder='Nome' required /><br />
          <input type='cpf' id='cpf' name='cpf' placeholder='CPF' required /><br />
          <input type='email' id='email' name='email' placeholder='Endereço de E-mail' required /><br />
          <input type='password' id='password' name='password' placeholder='Senha' required /><br />                    
          <input type='submit' value='REGISTRAR' />
        </form>
        <Link to="/login">Já tem conta?</Link>
      </div>
    </div>
    <Footer/>
    </>
  );
}

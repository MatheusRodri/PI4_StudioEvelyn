import './login.scss';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


export default function Login() {
  const handleLogin = (event) => {
    event.preventDefault();


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
          <h2 style={{ fontFamily: 'Arial, sans-serif' }}>LOGIN</h2>
          <form id='login-form' onSubmit={handleLogin}>
            <input type='email' id='email' name='email' placeholder='Endereço de E-mail' required /><br />
            <input type='password' id='password' name='password' placeholder='Senha' required /><br />                    
            <input type='submit' value='Entrar' />
          </form>
          <Link to="/registro">Registrar</Link>
        </div>
      </div>
    <Footer/>
    </>
  );
}

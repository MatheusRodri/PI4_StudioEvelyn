//importa o Link do react-router-dom e os icones do react-icons e o css do componente
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import './index.css';

export default function Footer() {
    return (
        <footer id="footer">
            <section id="text">
                <p>Desenvolvido por: Agatha Vitoria, Emily, Felipe e Matheus</p>
            </section>
            <section id="redes">
                <Link className="icon" href="https://www.facebook.com/" target="_blank">
                    <FaFacebook />
                </Link>
                <Link className="icon" href="https://www.instagram.com/" target="_blank">
                    <FaInstagram />
                </Link>
                <Link className="icon" href="#" target="_blank">
                    <FaWhatsapp />
                </Link>
            </section>
        </footer>
    )
}
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import './index.css';

export default function Footer(){
    return (
        <div id="footer">
            <div id="text">
                <p>Desenvolvido por: Agatha Vitoria, Emily, Felipe e Matheus</p>
            </div>
            <div id="redes">
                <Link className="icon" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <FaFacebook />
                </Link>
                <Link className="icon"  href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </Link>
            </div>
        </div>
    )
}
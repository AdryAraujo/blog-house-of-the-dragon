import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css"
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <div className="container-footer">
            <h3>Desenvolvido por Adryelle Araujo</h3>
            <div className="container-links">
                <a href="https://github.com/AdryAraujo">
                    <FaGithub className="container-links-icons" />
                </a>
                <a href="https://www.linkedin.com/in/adryelle-araujo-0787521ab">
                    <FaLinkedin className="container-links-icons" />
                </a>
            </div>
        </div>
    )
}
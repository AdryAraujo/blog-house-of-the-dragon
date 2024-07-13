import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoTargaryen.png';
import './Navbar.css';


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="navbar-image">
            <nav className='navbar-options'>
                <img src={logo} alt="" />
                <button
                    className="menu"
                    onClick={() => setMenuOpen(!menuOpen)}>
                    <FaBars className='menu-icon' />
                </button>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <Link to='/'>Início</Link>
                    </li>
                    <li>
                        <Link to='/personagens'>Personagens</Link>
                    </li>
                    <li>
                        <Link to='/'>Resumo</Link>
                    </li>
                    <li>
                        <Link to='/'>Dragões</Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar;
import { useState } from "react";
import happyPaw from '../assets/happyPaw.png';
import { Link } from "react-router-dom";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        alert(1);
    };

    return (
        <>
            <div className="navbar">
                <div className="navbar-access">
                    <Link to="/sacceso">Acceso</Link>
                </div>
                <div className="navbar-header">
                    <div className="navbar-logo"><Link to="/"><img src={happyPaw} alt="" /></Link></div>
                    <button className="navbar-toggle" onClick={toggleMenu}>☰</button>
                </div>
                <nav className="navbar-menu" id="navbarMenu">
                    <ul>
                        <li><Link to="/happy-paw">Cuida a una mascota</Link></li>
                        <li><a href="/happy-paw">Adopta ahora</a></li>
                        <li><a href="#donar">Donar a protectoras</a></li>
                        <li><a href="#protectoras">Protectoras</a></li>
                        <li><a href="#quienes">¿Quiénes somos?</a></li>
                        <li><a href="#contacta">Contacta</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
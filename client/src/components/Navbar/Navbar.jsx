import React from "react";
import "./Navbar.scss";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar(){
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()
    
    return(
        <nav className="nav-blur">       
            <div className="navWrap">  
                <div>     
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown-about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        O sboru
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown-about">
                        <li><a className="dropdown-item" onClick={() => navigate("/")}>Úvodní slovo</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate("/slozeni-vyboru")}>Složení výboru</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate("/slozeni-jednotek")}>Složení JSDH</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate("/mladi-hasici")}>Mladí hasiči</a></li>
                    </ul>
                </div>
                
                <a className="nav-link" onClick={() => navigate("/novinky")}>Novinky</a>
                <div>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown-info" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Informace
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown-info">
                        <li><a className="dropdown-item" onClick={() => navigate("/")}>Soutěže</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate("/")}>Soutěže jiných obcí</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate("/")}>Plánované akce</a></li>
                    </ul>
                </div>
                
                <div>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown-technic" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Technika
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown-technic">
                        <li><a className="dropdown-item" onClick={() => navigate("/")}>Tatra CAS 20-T815</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate("/")}>CAS 25 - Škoda 706</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate("/")}>PPS 12</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate("/")}>PPS 8</a></li>
                    </ul>
                </div>

                <div>
                    <a className="nav-link" href="#">Zásahy</a>
                </div>

                <div>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown-galery" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Galerie
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown-galery">
                        <li><a className="dropdown-item" href="#">Fotogalerie</a></li>
                        <li><a className="dropdown-item" href="#">Videogalerie</a></li>
                    </ul>
                </div>
                
                <div>
                    <a className="nav-link" onClick={() => navigate("/kontakt")}>Kontakt</a>
                </div>

                {currentUser == undefined && 
                
                    <a className="nav-link" onClick={() => navigate("/prihlaseni")}>Přihlášení</a>
                }
                {currentUser != undefined &&
                <>
                
                    <span>{currentUser.email}</span>
                    <a onClick={() => logout()}>Odhlásit</a>
                </>
                }
            </div>
        </nav>
    )
}

export default Navbar;
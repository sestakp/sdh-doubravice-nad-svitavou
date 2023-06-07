import React from "react";
import "./Navbar.scss";

function Navbar(){
    return(
        <nav className="nav-blur">       
            <div className="navWrap">  
                <div>     
                    <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown-about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        O sboru
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown-about">
                        <li><a class="dropdown-item" href="/slozeni-vyboru">Složení výboru</a></li>
                        <li><a class="dropdown-item" href="/slozeni-jednotek">Složení JSDH</a></li>
                        <li><a class="dropdown-item" href="#">Mladí hasiči</a></li>
                    </ul>
                </div>
                <div>
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown-info" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Informace
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown-info">
                        <li><a class="dropdown-item" href="#">Soutěže</a></li>
                        <li><a class="dropdown-item" href="#">Soutěže jiných obcí</a></li>
                        <li><a class="dropdown-item" href="#">Plánované akce</a></li>
                    </ul>
                </div>
                
                <div>
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown-technic" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Technika
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown-technic">
                        <li><a class="dropdown-item" href="#">Tatra CAS 20-T815</a></li>
                        <li><a class="dropdown-item" href="#">CAS 25 - Škoda 706</a></li>
                        <li><a class="dropdown-item" href="#">PPS 12</a></li>
                        <li><a class="dropdown-item" href="#">PPS 8</a></li>
                    </ul>
                </div>

                <div>
                    <a className="nav-link" href="#">Zásahy</a>
                </div>

                <div>
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown-galery" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Galerie
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown-galery">
                        <li><a class="dropdown-item" href="#">Fotogalerie</a></li>
                        <li><a class="dropdown-item" href="#">Videogalerie</a></li>
                    </ul>
                </div>
                

                <a className="nav-link" href="#">Kontakt</a>

                <a className="nav-link" href="#">Kniha návštěv</a>
            </div>
        </nav>
    )
}

export default Navbar;
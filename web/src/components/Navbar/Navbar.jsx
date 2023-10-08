import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from "../../assets/logo_sdh.png";


function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScrolling = () => {
    document.body.style.overflow = menuOpen ? "hidden" : "visible";
  };

  // Effect to handle scrolling when the overlay state changes
  useEffect(() => {
    handleScrolling();
  }, [menuOpen]);

  return (
    <nav className="nav-blur">
      <div className="navWrap">
        <img src={logo} style={{maxHeight: "9vh", cursor: "pointer"}} onClick={() => navigate("/")}/>
        <h2 className="title" onClick={() => navigate("/")}>
          Sbor dobrovolných hasičů Doubravice nad Svitavou
        </h2>

        {/* Hamburger menu icon for mobile devices */}
        <div className="hamburger-menu-icon" onClick={handleMenuToggle}>
            <MenuIcon style={{fontSize: "50px"}}/>
        </div>

        <div className="hamburger-menu" style={{display: menuOpen ? "block" : "none"}}>
                <div onClick={handleMenuToggle} style={{position: "absolute", top: 10, right: 10}}>
                    <CloseIcon style={{fontSize: "50px"}}/>
                </div>
                
                <div style={{paddingTop: "100px"}}>
                    <div>
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown-about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            O sboru
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown-about" style={{width: "100%"}}>
                            <li><a className="dropdown-item" onClick={() => {navigate("/"); handleMenuToggle()}}>Úvodní slovo</a></li>
                            <li><a className="dropdown-item" onClick={() => {navigate("/slozeni-vyboru"); handleMenuToggle()}}>Složení výboru</a></li>
                            <li><a className="dropdown-item" onClick={() => {navigate("/slozeni-jednotek"); handleMenuToggle()}}>Složení JSDH</a></li>
                            <li><a className="dropdown-item" onClick={() => {navigate("/mladi-hasici"); handleMenuToggle()}}>Mladí hasiči</a></li>
                        </ul>
                    </div>
                    
                    <a className="nav-link" onClick={() => {navigate("/novinky"); handleMenuToggle()}}>Novinky</a>

                    <div>
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown-technic" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Technika
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown-technic" style={{width: "100%"}}>
                        <li><a className="dropdown-item" onClick={() => {navigate("/equipment/cas20t815"); handleMenuToggle()}}>Tatra CAS 20-T815</a></li>
                        <li><a className="dropdown-item" onClick={() => {navigate("/equipment/cas25"); handleMenuToggle()}}>CAS 25 - Škoda 706</a></li>
                        <li><a className="dropdown-item" onClick={() => {navigate("/equipment/pps12"); handleMenuToggle()}}>PPS 12</a></li>
                        <li><a className="dropdown-item" onClick={() => {navigate("/equipment/pps8"); handleMenuToggle()}}>PPS 8</a></li>
                        </ul>
                    </div>

                    <div>
                        <a className="nav-link" onClick={() => {navigate("/kontakt"); handleMenuToggle()}}>Kontakt</a>
                    </div>

                    <div>
                        <a className="nav-link" onClick={() => {navigate("/kniha-navstev"); handleMenuToggle()}}>Kniha návštěv</a>
                    </div>

                    {currentUser == undefined &&
                      <div>
                        <a className="nav-link" onClick={() => {navigate("/prihlaseni"); handleMenuToggle()}}>Přihlášení</a>
                      </div>
                    }
                    {currentUser != undefined &&
                        <div style={{textAlign: "center", paddingTop: "100px"}}>
                          <p style={{fontSize: "30px", margin: 0}} >{currentUser.email}</p>
                          <a onClick={() => {logout(); handleMenuToggle()}} style={{fontSize: "22px"}}>Odhlásit</a>
                        </div>
                    }
                </div>

                
        </div>

        {/* Regular desktop menu */}
        <div className={`desktop-menu ${menuOpen ? "open" : ""}`}>
          <div>
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown-about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              O sboru
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown-about">
              <li><a className="dropdown-item" onClick={() => navigate("/")}>Úvodní slovo</a></li>
              <li><a className="dropdown-item" onClick={() => navigate("/slozeni-vyboru")}>Složení výboru</a></li>
              <li><a className="dropdown-item" onClick={() => navigate("/slozeni-jednotek")}>Složení JSDH</a></li>
              <li><a className="dropdown-item" onClick={() => navigate("/mladi-hasici")}>Mladí hasiči</a></li>
              <li><a className="dropdown-item" onClick={() => navigate("/mladi-hasici-kviz")}>Kvíz</a></li>
            </ul>
          </div>

          <a className="nav-link" onClick={() => navigate("/novinky")}>Novinky</a>

          <div>
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown-technic" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Technika
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown-technic">
              <li><a className="dropdown-item" onClick={() => navigate("/equipment/cas20t815")}>Tatra CAS 20-T815</a></li>
              <li><a className="dropdown-item" onClick={() => navigate("/equipment/cas25")}>CAS 25 - Škoda 706</a></li>
              <li><a className="dropdown-item" onClick={() => navigate("/equipment/pps12")}>PPS 12</a></li>
              <li><a className="dropdown-item" onClick={() => navigate("/equipment/pps8")}>PPS 8</a></li>
            </ul>
          </div>

          <div>
            <a className="nav-link" onClick={() => navigate("/kontakt")}>Kontakt</a>
          </div>

          <div>
            <a className="nav-link" onClick={() => navigate("/kniha-navstev")}>Kniha návštěv</a>
          </div>

          {currentUser == undefined &&
            <div>
              <a className="nav-link" onClick={() => navigate("/prihlaseni")}>Přihlášení</a>
            </div>
          }
          {currentUser != undefined &&
            <div>
              {/*<span>{currentUser.email}</span>*/}
              <a className="nav-link" onClick={() => logout()}>Odhlásit</a>
            </div>
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, {useState} from "react";
import "leaflet/dist/leaflet.css";
import "../navbar/navbar.css";
import logo1 from "../../img/logo-dark.png";
import logo2 from "../../img/logo2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Navbar() {

    const [showMobile, setShowMobile] = useState(false);
    const handleChange = () => {

        setShowMobile(!showMobile);

    };

    return (<header className="App-header">
        <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link
            href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
              rel="stylesheet"
          />
          <link
              href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
              rel="stylesheet"
          />
          <div className="logos-container">
              <div className="logo-container">
                  <a href="/">
                      <img src={logo1} alt="Logo 1" className="logo1"/>
                  </a>
                  <h1>RG Lançamentos</h1>
              </div>
              <a href="https://www.institutomonitor.com.br">
                  <img src={logo2} alt="Logo 2" className="logo2"/>
              </a>
          </div>

          <nav className="navigation">
              <ul>
                  <li>
                      <a href="#home">Home</a>
                  </li>
                  <li>
                      <a href="#sobre">Sobre</a>
                  </li>
                  <li>
                      <a href="#vantagens">Vantagens</a>
                  </li>
                  <li>
                      <a href="#unidades">Unidades</a>
                  </li>
              </ul>
          </nav>

      <div className="mobile-navigation" onClick={handleChange}/>
        {showMobile && <div className="navigation-popup">
            <ul className="navigation-mobile">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#sobre">Sobre</a>
                </li>
                <li>
                    <a href="#vantagens">Vantagens</a>
                </li>
                <li>
                    <a href="#unidades">Unidades</a>
                </li>
            </ul>
        </div>}
    </header>);
}

export default Navbar;

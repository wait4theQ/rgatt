import React, {useState} from "react";
import Slider from "react-slick";
//import { MapContainer, TileLayer,  LayerGroup, Marker, Popup, } from 'react-leaflet';
//import L from 'leaflet';
import Navbar from './components/navbar/index.js'
import Modal from './components/modal/index.js'
import Banner from "./components/banner/index.js";
import Location from "./components/location/index.js";
import Syllabus from "./components/syllabus";
import Perks from "./components/perks";
import Requirements from "./components/requirements";
import "leaflet/dist/leaflet.css";
import "./App.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Footer from "./footer";
import rita from "./img/picture.jpeg";
import avatar1 from "./img/avatar1.png";
import avatar2 from "./img/avatar2.png";
import avatar3 from "./img/avatar3.png";
import avatar4 from "./img/avatar4.png";
import VideoSection from "./components/vid/video.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const names = [
    "Felipe Cordeiro",
    "Isabela Mendes",
    "Lucas Oliveira",
    "Camila Santos",
  ];

  const testimonialsData = [
    {
      id: 1,
      text: '"Curso incrível! Recomendo a todos."',
      avatar: avatar1,
      name: names[0],
    },
    {
      id: 2,
      text: '"Ótimo suporte e conteúdo de alta qualidade."',
      avatar: avatar2,
      name: names[1],
    },
    {
      id: 3,
      text: '"Estou muito satisfeito com o curso!"',
      avatar: avatar3,
      name: names[2],
    },
    {
      id: 4,
      text: '"Excelente curso e equipe dedicada."',
      avatar: avatar4,
      name: names[3],
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (<div className="App">

    <Navbar/>
    <Banner/>
    <VideoSection/>
    <Syllabus/>
    <Requirements/>
    <Perks/>
        <div className="map-sec" id="unidades">
          <h1>Unidades</h1>
          <p>
            Como instituição de educação a distância que quer acompanhar de perto
            o desenvolvimento dos alunos, oferecemos a melhor estrutura e diversas
            unidades para que você tenha mais opções nos seus estudos.
          </p>
          <p>
            Confira abaixo o endereço de nossas Unidades e Polos da cidade de São
            Paulo
          </p>

          <Location/>
        </div>
        <FloatingWhatsApp
            phoneNumber="(11) 997075-3810"
            accountName="Ana Rita corretora de lançamentos"
            avatar={rita}
            chatMessage="Olá, como posso ajudar?"
            statusMessage="RG Lançamentos"
            avatarStyle={{width: "50px", height: "50px"}}
            allowClickAway="true"
            buttonStyle={{position: "fixed", left: "20px", bottom: "30px"}}
            chatboxStyle={{position: "fixed", left: "20px", bottom: "120px"}}
        />
        <Footer></Footer>
      </div>);
}

export default App;

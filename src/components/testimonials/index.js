import React, {useState} from "react";
import Slider from "react-slick";
//import { MapContainer, TileLayer,  LayerGroup, Marker, Popup, } from 'react-leaflet';
//import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import "./testimonials.css";
import avatar1 from "../../img/avatar1.png";
import avatar2 from "../../img/avatar2.png";
import avatar3 from "../../img/avatar3.png";
import avatar4 from "../../img/avatar4.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
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

		return (
				<div className="testimonials-section">
						<h2>Depoimentos de Clientes</h2>
						<Slider {...settings}>
								{testimonialsData.map((testimonial) => (<div key={testimonial.id} className="testimonial">
										<img
												src={testimonial.avatar}
												alt={`Cliente ${testimonial.id}`}
												className="client-image"
										/>
										<p
												style={{color: "black"}}
										>{`${testimonial.name} - ${testimonial.text}`}</p>
								</div>))}
						</Slider>
				</div>);
}

export default Testimonials;

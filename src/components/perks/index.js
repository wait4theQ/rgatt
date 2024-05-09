import React from "react";

import "leaflet/dist/leaflet.css";
import "./perks.css";
import demanda from "../../img/demanda.png";
import time from "../../img/time.png";
import money from "../../img/money.png";
import carreira from "../../img/carreira.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "../testimonials";
import Modal from "../modal";

function Perks() {


		return (<div className="Perks">
				<div className="vantagens-curso" id="vantagens" >
						<h1>VANTAGENS</h1>

						<div className="vantagens-section">
								<div className="vantagens-content">
										<img src={demanda} alt="vantagem 1"/>
										<h3>ALTA DEMANDA NO MERCADO</h3>
										<p>
												Segundo o COEFI, para atender a demanda do mercado, o número de
												corretores deveria ser pelo menos o dobro.
										</p>
								</div>
								<div className="vantagens-content">
										<img src={time} alt="vantagem 2"/>
										<h3>FLEXIBILIDADE DE HORÁRIO</h3>
										<p>
												O corretor de imóveis tem uma agenda flexível com horários
												alternativos e com isso ganha tempo para dar atenção a outras
												atividades econômicas.
										</p>
								</div>
								<div className="vantagens-content">
										<img src={money} alt="vantagem 3"/>
										<h3>REMUNERAÇÃO ALTA</h3>
										<p>
												A comissão do corretor pode chegar a 6% do valor do imóvel. se
												vender um imóvel de 360 mil reais, sua comissão será de R$
												21.600,00 ao atuar de forma autônoma e em parceria com uma
												imobiliária, a comissão pode ser de R$ 10.800,00.
										</p>
								</div>
								<div className="separator"></div>
								<div className="vantagens-content">
										<img src={carreira} alt="vantagem 4"/>
										<h3>UMA CARREIRA SÓLIDA</h3>
										<p>
												O mercado imobiliário é cheio de oportunidades de crescimento. Se
												o profissional se dedicar ele consegue construir uma carreira de
												sucesso no segmento imobiliário.
										</p>
								</div>
								<Modal/>
						</div>
				</div>
				<Testimonials></Testimonials>
		</div>);
}

export default Perks;

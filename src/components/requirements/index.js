import React from "react";
import "leaflet/dist/leaflet.css";
import "./requirements.css";

import rita from "../../img/picture.jpeg";
import requirements from "../../img/requirements.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "../modal";

function Requirements() {

		return (
				<div className="sobre-o-curso-section">
						<div className="quem-sou-section" id="sobre">
								<div className="quem-sou-box">
										<div className="quem-sou-image">
												<img src={rita} alt="rita png"/>
										</div>
										<div className="quem-sou-content">
												<h2>Quem sou?</h2>
												<p>Rita Leite</p>
										</div>
										<div className="quem-sou-info">
												<p>
														Especialista em lançamentos imobiliários, tenho 13 anos no
														mercado e sou Proprietária da RG Lançamentos.
												</p>
										</div>
										<div className="chamada-instagram">
												<p>
														Explore o fascinante mundo dos imóveis e aprimore sua carreira!
														🏡✨ Me siga no Instagram para dicas, oportunidades e cursos
														exclusivos
												</p>
										</div>
										<div className="social-media">
												<div className="instagram-sobre">
														<a
																href="https://www.instagram.com/ritaleitecorretora/"
																target="_blank"
																rel="noopener noreferrer"
														>
																<img src={require("../../img/instagram.png")} alt="Instagram"/>
																ritaleitecorretora
														</a>
												</div>
										</div>
								</div>
						</div>
						<div className="sobre-o-curso-box">
								<div className="sobre-o-curso-image">
										{/* Adicione o caminho da imagem que deseja exibir */}
										<img src={requirements} alt="Imagem do Curso"/>
								</div>

								<div className="sobre-o-curso-content">
										<h2>Requisitos:</h2>
										<div className="sobre-o-curso-info">
												<ul>
														<p>✔️ Mínimo 18 anos</p>
														<p>✔️ Cópia da Certidão de Nascimento ou Casamento</p>
														<p>✔️ Cópia do RG e CPF</p>
														<p>✔️ Foto</p>
														<p>
																✔️ Cópia autenticada do Certificado de Conclusão do Ensino
																Médio (antigo 2º Grau) e Histórico Escolar (com lauda ou
																visto-confere) ou comprovante de que está cursando o ensino
																médio
														</p>
												</ul>
										</div>
								</div>
								<Modal/>
						</div>
				</div>);
}

export default Requirements;

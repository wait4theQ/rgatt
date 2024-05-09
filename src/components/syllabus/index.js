import React, {useState} from "react";
//import { MapContainer, TileLayer,  LayerGroup, Marker, Popup, } from 'react-leaflet';
//import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import "./syllabus.css";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "../modal";

function Syllabus() {


		return (<div className="Syllabus">
				<div className="syllabus-section">
						<h1>PROGRAMA DO CURSO</h1>
						<div className="syllabus-section-content">
								<div className="module 1">
										<h5>Módulo I - Básico</h5>
										<ul>
												<li> Comunicação Empresarial</li>
												<li> Fundamentos de Gestão</li>
												<li> Legislação e Ética</li>
												<li> Informática Aplicada</li>
												<li> Comportamento Organizacional</li>
										</ul>
								</div>

								<div className="module 2">
										<h5>Módulo II - Qualificação Profissional </h5>
										<ul>
												<li> Matemática Financeira</li>
												<li> Desenho Arquitetônico e Noções de Construção Civil</li>
												<li> Economia e Estrutura de Mercados</li>
												<li> Gestão de Marketing e Vendas</li>
												<li> Operações Imobiliárias</li>
										</ul>
								</div>
								<div className="course-numbers">
										<ul>
												<li>
														<b>Carga horária:</b> 800 horas
												</li>
												<li>
														<b>Estágio Profissional:</b> 150 horas
												</li>
												<li>
														<b>Carga horária total:</b> 950 horas
												</li>
												<li>
														<b>Total de avaliações:</b> 10 Provas Presenciais
												</li>
										</ul>
										<Modal/>
										<p>
												"Após a confirmação de pagamento você receberá um e-mail do
												instituto monitor para realizar a matrícula, escolher o polo e
												enviar documentos exigidos para dar início no curso!"
										</p>
								</div>
						</div>
				</div>

		</div>);
}

export default Syllabus;

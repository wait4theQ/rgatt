import React from "react";
import "leaflet/dist/leaflet.css";
import "../modal/modal.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Modal() {

		return (
						<div className="modal-container">
								<div className="modal-text">
										<div className="modal-price">

												<h3><s>De: R$ 1.199,00</s></h3>
												<h2> Por: R$ 600,00</h2>
												<h3>Em até 6x sem juros!</h3>
												{/*<h3> Pague apenas:</h3>*/}
												{/*<h3>R$ 100,00/mês*</h3>*/}
												<div className="modal-info"><h3>Modalidade: EAD</h3></div>
										</div>
										{/*<h2>Inclui:</h2>*/}
										{/*<li>Certificado de Qualificação</li>*/}
										{/*<li>Diploma de Nível Técnico</li>*/}
										{/*<li>Direito ao CRECI</li>*/}

										<button
												className="matricule-se-button"
												onClick={() => (window.location.href = "https://www.alboompay.com/RitaLeite/button/65306fc07b503d0026e77449")}
										>
												Inscreva-se!
										</button>
										<br/>
										<p>*(Oferta exclusiva RG Lançamentos)</p>
								</div>
						</div>);
}

export default Modal;

import React, { useState } from 'react';
import './polos.css'; 

const Polo = ({ city, address }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = (e) => {
    
    if (e.target.classList.contains('polo-header') || e.target.classList.contains('plus-icon') || e.target.classList.contains('polo-item')) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className={`polo-item ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpansion}>
      <div className="polo-header">
        <h3>{city}</h3>
        <div className="plus-icon">{isExpanded ? '-' : '+'}</div>
      </div>
      {isExpanded && (
        <div className="polo-details">
          <p>{address}</p>
        </div>
      )}
    </div>
  );
};

const Polos = () => {
  const poloData = [
    { city: 'ARAÇATUBA - SP', address: 'Rua Gonçalves Ledo, 568 - São Joaquim – Araçatuba – SP – CEP 16050-300' },
    { city: 'BAURU - SP', address: 'Av. Duque de Caxias - Quadra 22-55, - Vila Cardia – Bauru – SP – CEP 17011-066' },
    { city: 'CAMPINAS - SP', address: 'Rua Antonio Alvarez Lobo, 172 - Botafogo – Campinas – SP – CEP 13020-110' },
    { city: 'ITATIBA - SP', address: 'Rua Comendador Franco, 11 - Sala 40 - Centro – Itatiba – SP – CEP 13250-240' },
    { city: 'MOGI DAS CRUZES - SP', address: 'Rua Capitão Manoel Caetano, 223 - Centro – Mogi das Cruzes – SP – CEP 08710-190' },
    { city: 'PENAPÓLIS - SP', address: 'Rua Santa Clara, 247 - Centro – Penápolis – SP – CEP 16300-000' },
    { city: 'PIRACICABA - SP', address: 'Rua Alferes José Caetano, 1448 - Centro – Piracicaba – SP – CEP 13400-123' },
    { city: 'REGISTRO - SP', address: 'Rua Tamekishi Takano, 146 - (lito Palace Hotel) - Centro – Registro – SP – CEP 11900-000' },
    { city: 'SANTA CRUZ DO RIO PARDO - SP', address: 'Av. Tiradentes, 728 - Centro – Santa Cruz do Rio Pardo – SP – CEP 18900-000' },
    { city: 'SÃO CARLOS - SP', address: 'Rua Ambrósio dos Santos, 1081 - Planalto Paraíso – São Carlos – SP – CEP 13562-000' },
    { city: 'SÃO JOSÉ DO RIO PRETO - SP', address: 'Rua Santo Agostinho, 312 - Vila Nossa Senhora da Paz – São José do Rio Preto – SP – CEP 15025-220' },
    { city: 'SÃO JOSÉ DOS CAMPOS - SP', address: 'Avenida Teopompo de Vasconcelos, 57 - Vila Adyana – São José dos Campos – SP – CEP 12243-830' },
    { city: 'CAMPUS SÃO PAULO - SP', address: 'Avenida Rangel Pestana, 1.105 - Brás – São Paulo – SP – CEP 03001-000' },
    { city: 'SANTOS - SP', address: 'R. Campos Mello, 190 - Vila Matias, Santos - SP, 11015-010' }, 
    { city: 'TAGUATINGA - DF', address: 'Qsb 04/05 Área Especial 8, St. B Sul - Taguatinga, Brasília - DF, 72015-000' }, 
    { city: 'SOROCABA - SP', address: 'R. João Pessoa, 112 - Vila Jardini, Sorocaba - SP, 18044-050' }, 
    { city: 'VOTUPORANGA - SP', address: 'Rua Denizar Vidigal, 3620 - Chácara das Paineiras – Votuporanga – SP – CEP 15502-221' }, 
    
  ];

  return (
    <div className="polos-container">
      {poloData.map((polo, index) => (
        <Polo key={index} city={polo.city} address={polo.address} />
      ))}
    </div>
  );
};

export default Polos;

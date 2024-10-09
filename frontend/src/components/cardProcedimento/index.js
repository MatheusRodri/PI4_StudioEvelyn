import { useState } from 'react';
import './style.css'

export default function CardProcedimento({ procedimento }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="card-procedimento"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <img src={procedimento.image} alt={procedimento.name} />
      {isHovered ? (
        <div className="description">
          <p>{procedimento.description}</p>
        </div>
      ) : (
        <>
          <h2>{procedimento.name}</h2>
          <span>{procedimento.price}</span>
        </>
      )}
      
    </div>
  );
}
import React from 'react';
import './filtro.css';

interface FiltroAdoptarProps {
  onClose: () => void;
}

const FiltroAdoptar: React.FC<FiltroAdoptarProps> = ({ onClose }) => {
  const togglePopup = () => {
    onClose(); // Llama a la función onClose cuando se desea cerrar el popup
  };

  return (
    <div className="popup-filtro">
      <div className="bloque_buscador">
        <div className="buscador">
          <div className="opcion">
            <label htmlFor="provincia" title="provincia" className="hidden-label">
              <select id="provincia">
                <option value="">Provincia</option>
              </select>
            </label>
          </div>
          <div className="opcion">
            <label htmlFor="tipo" title="tipo" className="hidden-label">
              <select id="tipo">
                <option value="">Tipo de mascota</option>
                <option value="Gato">Gatos</option>
                <option value="Perro">Perros</option>
              </select>
            </label>
          </div>
          <div className="opcion">
            <label htmlFor="tamanyo" title="tamanyo" className="hidden-label">
              <select id="tamanyo">
                <option value="">Tamaño</option>
                <option value="Pequeño">Pequeño</option>
                <option value="Mediano">Mediano</option>
                <option value="Grande">Grande</option>
              </select>
            </label>
          </div>
          <div className="opcion">
            <label htmlFor="sexo" title="sexo" className="hidden-label">
              <select id="sexo">
                <option value="">Sexo</option>
                <option value="Macho">Macho</option>
                <option value="Hembra">Hembra</option>
              </select>
            </label>
          </div>
          <div className="btn_marron">
            <a href="#">Buscar</a>
          </div>
        </div>
      </div>
      <button onClick={togglePopup}>Cerrar</button>
    </div>
  );
};

export default FiltroAdoptar;

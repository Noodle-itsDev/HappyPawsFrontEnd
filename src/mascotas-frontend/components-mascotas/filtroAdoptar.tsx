import React, { useState } from 'react';
import './filtro.css';

interface FiltroAdoptarProps {
  onClose: () => void;
  applyFilters: (filters: any) => void;
}

const FiltroAdoptar: React.FC<FiltroAdoptarProps> = ({ onClose, applyFilters }) => {
  const [tipo, setTipo] = useState('');
  const [genero, setGenero] = useState('');
  const [tamaño, setTamaño] = useState('');

  const handleApplyFilters = () => {
    applyFilters({ tipo, genero, tamaño });
    onClose(); // Cierra el popup después de aplicar los filtros
  };

  return (
    <div className="popup-filtro">
      <div className="bloque_buscador">
        <div className="buscador">
          <div className="opcion">
            <label htmlFor="tipo" title="tipo" className="hidden-label">
              <select id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                <option value="">Tipo de mascota</option>
                <option value="Gato">Gatos</option>
                <option value="Perro">Perros</option>
              </select>
            </label>
          </div>
          <div className="opcion">
            <label htmlFor="genero" title="genero" className="hidden-label">
              <select id="genero" value={genero} onChange={(e) => setGenero(e.target.value)}>
                <option value="">Sexo</option>
                <option value="Macho">Macho</option>
                <option value="Hembra">Hembra</option>
              </select>
            </label>
          </div>
          <div className="opcion">
            <label htmlFor="tamaño" title="tamaño" className="hidden-label">
              <select id="tamaño" value={tamaño} onChange={(e) => setTamaño(e.target.value)}>
                <option value="">Tamaño</option>
                <option value="Pequeño">Pequeño</option>
                <option value="Mediano">Mediano</option>
                <option value="Grande">Grande</option>
              </select>
            </label>
          </div>
          <div className="btn_marron">
            <button onClick={handleApplyFilters}>Buscar</button>
          </div>
        </div>
      </div>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default FiltroAdoptar;

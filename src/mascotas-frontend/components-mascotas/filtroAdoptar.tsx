import React, { useState } from 'react';
import './filtro.css';

interface FiltroAdoptarProps {
  onClose: () => void;
  applyFilters: (filters: { tipomascota: string; genero: string; tamaño: string; provincia: string }) => void;
  provincias: { provincia: string, count: number }[];
}

const FiltroAdoptar: React.FC<FiltroAdoptarProps> = ({ onClose, applyFilters, provincias }) => {
  const [tipomascota, setTipomascota] = useState('');
  const [genero, setGenero] = useState('');
  const [tamaño, setTamaño] = useState('');
  const [provincia, setProvincia] = useState('');

  const handleApplyFilters = () => {
    applyFilters({ tipomascota, genero, tamaño, provincia });
    onClose();
  };

  const handleResetFilters = () => {
    setTipomascota('');
    setGenero('');
    setTamaño('');
    setProvincia('');
    applyFilters({ tipomascota: '', genero: '', tamaño: '', provincia: '' });
    onClose();
  };

  return (
    <div className="popup-filtro">
      <div className="bloque_buscador">
        <div className="buscador">
          <div className="opcion">
            <label htmlFor="tipomascota" title="tipomascota" className="hidden-label">
              <select id="tipomascota" value={tipomascota} onChange={(e) => setTipomascota(e.target.value)}>
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
          <div className="opcion">
            <label htmlFor="provincia" title="provincia" className="hidden-label">
              <select id="provincia" value={provincia} onChange={(e) => setProvincia(e.target.value)}>
                <option value="">Provincia</option>
                {provincias.map(p => (
                  <option key={p.provincia} value={p.provincia}>
                    {p.provincia} ({p.count})
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>
      <div className="btn-group">
        <button onClick={handleApplyFilters}>Buscar</button>
        <button onClick={handleResetFilters}>Restablecer</button>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  )
};

export default FiltroAdoptar;

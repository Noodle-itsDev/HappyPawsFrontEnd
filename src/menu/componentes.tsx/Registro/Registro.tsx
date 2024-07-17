// Registro.tsx
import React, { useState } from 'react';
const Registro: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="container">
      <div className="tab">
        <button className="active">Registro</button>
        <button>Login</button>
      </div>
      <form> 
        <label> 
          Usuario
          <input type="text" placeholder="Introducir usuario" />
        </label>
        <label>
          Correo
          <input type="email" placeholder="Introducir correo" />
        </label>
        <label className="eye-icon">
          Contraseña
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Introducir contraseña" 
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "🙈" : "👁️"}
          </span>
        </label>
        <label className="eye-icon">
          Confirmar contraseña
          <input 
            type={showConfirmPassword ? "text" : "password"} 
            placeholder="Introducir contraseña" 
          />
          <span onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
            {showConfirmPassword ? "🙈" : "👁️"}
          </span>
        </label>
        <label>
          Dirección *
          <input type="text" placeholder="Dirección" />
        </label>
        <div className="address">
          <input type="text" placeholder="Calle" />
          <input type="text" placeholder="Núm." />
        </div>
        <div className="address">
          <input type="text" placeholder="Postal" />
          <input type="text" placeholder="Población" />
        </div>
      </form>
    </div>
  );
};

export default Registro;

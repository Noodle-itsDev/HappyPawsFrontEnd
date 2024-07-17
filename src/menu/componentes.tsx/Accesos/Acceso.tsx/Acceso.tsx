import React from 'react';
const Acceso: React.FC = () => {
    return (
        <div className="login-container">
        <div className="form-container">
          <div className="tabs">
            <button className="tab">Registro</button>
            <button className="tab active">Login</button>
          </div>
          <h2>¡Bienvenido de nuevo!</h2>
          <form>
            <div className="input-group">
              <label htmlFor="cif">CIF o Correo</label>
              <input type="text" id="cif" placeholder="Introduzca CIF o correo" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" placeholder="Introducir contraseña" />
              <a href="/" className="forgot-password">¿Has olvidado tu contraseña?</a>
            </div>
            <button type="submit" className="login-button">Entrar</button>
          </form>
          <div className="links">
            <a href="/">¿No tienes cuenta? Date de alta como protectora</a>
            <a href="/">Iniciar sesión como Usuario</a>
          </div>
        </div>
      </div>
    );
};

export default Acceso;
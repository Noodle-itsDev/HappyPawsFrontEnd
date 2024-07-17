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
              <label htmlFor="usuario">Usuario o Correo</label>
              <input type="text" id="cif" placeholder="Introducir usuario" />
            </div>-
            <div className="inputgroup">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" placeholder="Introducir contraseña" />
              <a href="/" className="forgot-password">¿Has olvidado tu contraseña?</a>
            </div>
            <button type="submit" className="login-button">Entrar</button>
          </form>
          <div className="links">
            <a href="/">¿No tienes cuenta? Regístrate</a>
            <a href="/">Iniciar sesión como protectora</a>
          </div>
        </div>
      </div>
    );
};

export default Acceso;
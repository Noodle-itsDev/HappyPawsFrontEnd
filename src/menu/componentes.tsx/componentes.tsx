import './index.css'

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Borja from './components/Borja';
import NavBar from './components/NavBar';
import Acceso from './components/Acceso';
import Registro from './components/Registro';
import Acceso2 from './components/Acceso2';


const App: React.FC = () => {

  return (
    <> 
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/happy-paw" element={<Borja />} />
        <Route path="/acceso" element={<Acceso />} />
        <Route path="/registro" element={<Registro />} /> 
        <Route path="/acceso2" element={<Acceso2 />} /> 
      </Routes>
    </>
  );
};

export default App;
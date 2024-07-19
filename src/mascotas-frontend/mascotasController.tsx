import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components-mascotas/header';
import ProductCard from './components-mascotas/ProductCard';
import ProductCard2 from './components-mascotas/ProductCard2';
import PiePagina from './components-mascotas/piePagina';
import FiltroAdoptar from './components-mascotas/filtroAdoptar';
import './components-mascotas/filtro.css';
import IconoFiltrar from './assets/icono-filtro.png';
import GatoREI from './assets/gato-rei.jpg';
import imagengato1 from './assets/gato1.png';


interface Product {
  imageUrl: string;
  title: string;
  description: string;
  genero: 'Macho' | 'Hembra';
  tipomascota: 'Perro' | 'Gato';
}

const products: Product[] = [
  {
    imageUrl: GatoREI,
    title: "REI",
    description: "Soy un gato tranquilo y amoroso, muy amigable con otras mascotas y con los niños.",
    genero: "Macho",
    tipomascota: "Gato",
  },
  {
    imageUrl: imagengato1,
    title: "Milo",
    description: "Soy un gato juguetón y curioso, me encanta explorar y descubrir nuevos lugares.",
    genero: "Macho",
    tipomascota: "Perro",
  },
  
];

const itemsPerPage = 5;

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [filters, setFilters] = useState({
    tipo: '',
    genero: '',
    tamaño: '',
  });

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredProducts = products.filter((product) => {
    return (
      (filters.tipo === '' || product.tipomascota === filters.tipo) &&
      (filters.genero === '' || product.genero === filters.genero)
    );
  });

  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const applyFilters = (newFilters: any) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters are applied
  };

  return (
    <>
      <Header />
      <div className='container-boton'>
        <button onClick={togglePopup} className='boton-filtrar'>
          Filtrar <img src={IconoFiltrar} alt="" className='icono-filtro' />
        </button>
      </div>
      {showPopup && <FiltroAdoptar onClose={togglePopup} applyFilters={applyFilters} />}
      <Routes>
        <Route path="/" element={
          <>
            {currentProducts.map((product, index) => (
              index % 2 === 0 ? (
                <ProductCard
                  key={index}
                  imageUrl={product.imageUrl}
                  title={product.title}
                  description={product.description}
                  genero={product.genero}
                  tipomascota={product.tipomascota}
                />
              ) : (
                <ProductCard2
                  key={index}
                  imageUrl={product.imageUrl}
                  title={product.title}
                  description={product.description}
                  genero={product.genero}
                  tipomascota={product.tipomascota}
                />
              )
            ))}
            <PiePagina
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageChange={(event, value) => handlePageChange(event, value)}
            />
          </>
        } />
      </Routes>
    </>
  );
};

export default App;

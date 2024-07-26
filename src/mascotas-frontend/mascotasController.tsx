import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components-mascotas/header';
import ProductCard from './components-mascotas/ProductCard';
import ProductCard2 from './components-mascotas/ProductCard2';
import PiePagina from './components-mascotas/piePaginaNavegacion';
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
  provincia: string;
}

const products: Product[] = [
  {
    imageUrl: GatoREI,
    title: "REI",
    description: "Soy un gato tranquilo y amoroso, muy amigable con otras mascotas y con los niños.",
    genero: "Macho",
    tipomascota: "Gato",
    provincia: "Madrid"
  },
  {
    imageUrl: imagengato1,
    title: "Juana",
    description: "Soy un perro pequeñito muy tranquilo, soy tímido y cariñoso me gusta dormir con las personas y que me den cariño.",
    genero: "Hembra",
    tipomascota: "Perro",
    provincia: "Barcelona"
  },
  {
    imageUrl: imagengato1,
    title: "Luna",
    description: "Soy una gata juguetona y curiosa, me encanta explorar y jugar con juguetes.",
    genero: "Hembra",
    tipomascota: "Gato",
    provincia: "Valencia"
  },
  {
    imageUrl: imagengato1,
    title: "Max",
    description: "Soy un perro grande y protector, siempre estoy alerta y cuido de mi familia.",
    genero: "Macho",
    tipomascota: "Perro",
    provincia: "Sevilla"
  },
  {
    imageUrl: imagengato1,
    title: "Bella",
    description: "Soy una gata muy cariñosa, me encanta acurrucarme y recibir mimos.",
    genero: "Hembra",
    tipomascota: "Gato",
    provincia: "Bilbao"
  },
  {
    imageUrl: imagengato1,
    title: "Rocky",
    description: "Soy un perro enérgico y juguetón, me encanta correr y jugar al aire libre.",
    genero: "Macho",
    tipomascota: "Perro",
    provincia: "Zaragoza"
  },
  {
    imageUrl: imagengato1,
    title: "Mia",
    description: "Soy una gata tranquila y observadora, me gusta descansar en lugares altos.",
    genero: "Hembra",
    tipomascota: "Gato",
    provincia: "Granada"
  },
  {
    imageUrl: imagengato1,
    title: "Charlie",
    description: "Soy un perro amigable y sociable, me llevo bien con otros perros y personas.",
    genero: "Macho",
    tipomascota: "Perro",
    provincia: "Málaga"
  },
  {
    imageUrl: imagengato1,
    title: "Nala",
    description: "Soy una gata independiente y curiosa, me gusta explorar y descubrir nuevos lugares.",
    genero: "Hembra",
    tipomascota: "Gato",
    provincia: "Murcia"
  },
  {
    imageUrl: imagengato1,
    title: "Toby",
    description: "Soy un perro leal y protector, siempre estoy pendiente de mi familia.",
    genero: "Macho",
    tipomascota: "Perro",
    provincia: "Alicante"
  },
  {
    imageUrl: imagengato1,
    title: "Lola",
    description: "Soy una gata juguetona y cariñosa, me encanta jugar con pelotas y recibir caricias.",
    genero: "Hembra",
    tipomascota: "Gato",
    provincia: "Córdoba"
  },
{
    imageUrl: imagengato1,
    title: "Simba",
    description: "Soy un gato aventurero y curioso, siempre buscando nuevas experiencias.",
    genero: "Macho",
    tipomascota: "Gato",
    provincia: "Valencia"
  },
  {
    imageUrl: imagengato1,
    title: "Daisy",
    description: "Soy una perrita dulce y juguetona, me encanta correr y jugar con mis amigos.",
    genero: "Hembra",
    tipomascota: "Perro",
    provincia: "Madrid"
  },
  {
    imageUrl: imagengato1,
    title: "Oscar",
    description: "Soy un gato tranquilo y observador, me gusta descansar en lugares soleados.",
    genero: "Macho",
    tipomascota: "Gato",
    provincia: "Barcelona"
  },
  {
    imageUrl: imagengato1,
    title: "Molly",
    description: "Soy una perrita cariñosa y leal, siempre estoy lista para dar y recibir amor.",
    genero: "Hembra",
    tipomascota: "Perro",
    provincia: "Sevilla"
  },
  {
    imageUrl: imagengato1,
    title: "Leo",
    description: "Soy un gato juguetón y enérgico, me encanta perseguir juguetes y explorar.",
    genero: "Macho",
    tipomascota: "Gato",
    provincia: "Bilbao"
  },
  {
    imageUrl: imagengato1,
    title: "Lucy",
    description: "Soy una perrita amigable y sociable, me llevo bien con otros animales y personas.",
    genero: "Hembra",
    tipomascota: "Perro",
    provincia: "Zaragoza"
  },
  {
    imageUrl: imagengato1,
    title: "Felix",
    description: "Soy un gato independiente y curioso, me gusta explorar y descubrir nuevos lugares.",
    genero: "Macho",
    tipomascota: "Gato",
    provincia: "Granada"
  },
  {
    imageUrl: imagengato1,
    title: "Sophie",
    description: "Soy una perrita tranquila y cariñosa, me encanta acurrucarme y recibir mimos.",
    genero: "Hembra",
    tipomascota: "Perro",
    provincia: "Málaga"
  },
  {
    imageUrl: imagengato1,
    title: "Milo",
    description: "Soy un gato juguetón y curioso, siempre buscando nuevas aventuras.",
    genero: "Macho",
    tipomascota: "Gato",
    provincia: "Murcia"
  },
  {
    imageUrl: imagengato1,
    title: "Chloe",
    description: "Soy una perrita leal y protectora, siempre estoy pendiente de mi familia.",
    genero: "Hembra",
    tipomascota: "Perro",
    provincia: "Alicante"
  }
];

const getProvinciasWithCount = (products: Product[]) => {
  const provinciasCount: { [key: string]: number } = {};

  products.forEach(product => {
    if (provinciasCount[product.provincia]) {
      provinciasCount[product.provincia]++;
    } else {
      provinciasCount[product.provincia] = 1;
    }
  });

  return Object.entries(provinciasCount)
    .map(([provincia, count]) => ({
      provincia,
      count
    }))
    .sort((a, b) => a.provincia.localeCompare(b.provincia)); 
};

const itemsPerPage = 5;

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [filters, setFilters] = useState({
    tipomascota: '',
    genero: '',
    tamaño: '',
    provincia: ''
  });

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredProducts = products.filter((product) => {
    return (
      (filters.tipomascota === '' || product.tipomascota === filters.tipomascota) &&
      (filters.genero === '' || product.genero === filters.genero) &&
      (filters.provincia === '' || product.provincia === filters.provincia)
    );
  });

  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const applyFilters = (newFilters: { tipomascota: string; genero: string; tamaño: string; provincia: string }) => {
    setFilters(newFilters);
    setCurrentPage(1); 
  };

  const provinciasWithCount = getProvinciasWithCount(products);

  return (
    <>
      <Header />
      <div className='container-boton'>
        <button onClick={togglePopup} className='boton-filtrar'>
          Filtrar <img src={IconoFiltrar} alt="" className='icono-filtro' />
        </button>
      </div>
      {showPopup && <FiltroAdoptar onClose={togglePopup} applyFilters={applyFilters} provincias={provinciasWithCount} />}
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
                />
              ) : (
                <ProductCard2
                  key={index}
                  imageUrl={product.imageUrl}
                  title={product.title}
                  description={product.description}
                  genero={product.genero}
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

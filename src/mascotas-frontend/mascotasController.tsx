import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components-mascotas/header';
import ProductCard from './components-mascotas/ProductCard';
import ProductCard2 from './components-mascotas/ProductCard2';
import PiePagina from './components-mascotas/piePagina';
import FiltroAdoptar from './components-mascotas/filtroAdoptar';  // Importación correcta del componente FiltroAdoptar
import imagengato1 from './assets/gato1.png';
import reborde from './assets/reborde-felinos.png';
import GatoREI from './assets/gato-rei.jpg';

const products = [
  {
    imageUrl: GatoREI,
    title: "REI",
    description: "Soy un gato tranquilo y amoroso, muy amigable con otras mascotas y con los niños.",
    genero: "Macho",
  },
  {
    imageUrl: imagengato1,
    title: "Milo",
    description: "Soy un gato juguetón y curioso, me encanta explorar y descubrir nuevos lugares.",
    genero: "Macho",
  },
  {
    imageUrl: imagengato1,
    title: "Juana",
    description: "Soy un gato pequeñito muy tranquilo, soy tímido y cariñoso me gusta dormir con las personas y que me den cariño.",
    genero: "Hembra",
  },
  {
    imageUrl: imagengato1,
    title: "Simón",
    description: "Soy Simón, un gato curioso y juguetón. Me encanta explorar cada rincón de la casa y descubrir nuevos juguetes.",
    genero: "Macho",
  },
  {
    imageUrl: imagengato1,
    title: "Luna",
    description: "Soy Luna, una gatita muy elegante y tranquila. Disfruto pasar mis días tomando largas siestas al sol y observando el mundo desde mi ventana.",
    genero: "Hembra",
  },
  {
    imageUrl: imagengato1,
    title: "Max",
    description: "Me llamo Max y soy un gato aventurero y valiente. Me encanta escalar árboles y explorar el jardín. También disfruto de las caricias y jugar con mis juguetes favoritos.",
    genero: "Macho",
  },
  {
    imageUrl: imagengato1,
    title: "Mia",
    description: "soy una gata muy sociable y cariñosa. Me encanta estar rodeada de gente y recibir mimos.",
    genero: "Hembra",
  },
  {
    imageUrl: imagengato1,
    title: "Leo",
    description: "Me gusta estar al tanto de todo lo que sucede en casa y participar en todas las actividades familiares. Siempre estoy listo para jugar y recibir caricias.",
    genero: "Macho",
  },
  {
    imageUrl: imagengato1,
    title: "Simba",
    description: "Soy un gato tranquilo y cariñoso. Me gusta descansar en lugares soleados y recibir caricias. Soy un gran compañero y me encanta estar cerca de mis humanos.",
    genero: "Macho",
  },
  {
    imageUrl: imagengato1,
    title: "Mimi",
    description: "Soy una gata juguetona y enérgica. Me encanta jugar con pelotas y perseguir juguetes. Siempre estoy buscando algo divertido para hacer y disfruto de la compañía de otros gatos.",
    genero: "Hembra",
  },
  {
    imageUrl: imagengato1,
    title: "Oliver",
    description: "Soy un gato inteligente y observador. Me gusta sentarme en lugares altos y observar todo lo que sucede a mi alrededor. Disfruto de los mimos y siempre estoy listo para una siesta.",
    genero: "Macho",
  },
];

const itemsPerPage = 5;

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPopup, setShowPopup] = useState(false); 

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const togglePopup = () => {
    setShowPopup(!showPopup); // Cambia el estado para mostrar u ocultar el popup
  };

  return (
    <>
      <Header />
      <button onClick={togglePopup}>Filtrar</button> {}
      {showPopup && <FiltroAdoptar onClose={togglePopup} />} {}
      <Routes>
        <Route path="/" element={
          <>
            {currentProducts.map((product, index) => (
              index % 2 === 0 ? (
                <ProductCard
                  key={index}
                  rebordefelinos={reborde}
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

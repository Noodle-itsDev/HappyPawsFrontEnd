import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductCard2 from './ProductCard2'; 

interface Item {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  genero: string;
}

interface CatalogProps {
  items: Item[];
  itemsPerPage: number;
}

const Catalog: React.FC<CatalogProps> = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: -100, behavior: 'smooth' });
  };
  

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  return (
    <div>
      <div className="products-list">
        {currentItems.map((item, index) => (
          index % 2 === 0 ? (
            <ProductCard
              key={item.id}
              imageUrl={item.imageUrl}
              title={item.name}
              description={item.description}
              genero={item.genero}
            />
          ) : (
            <ProductCard2
              key={item.id}
              imageUrl={item.imageUrl}
              title={item.name}
              description={item.description}
              genero={item.genero}
            />
          )
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Catalog;

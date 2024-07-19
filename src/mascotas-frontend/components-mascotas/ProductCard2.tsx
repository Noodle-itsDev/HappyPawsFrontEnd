import React from 'react';
import './ProductCard2.css'; 
import './ProductCard.css';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  genero: string;
  tipomascota?: 'Perro' | 'Gato';
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, description, genero, tipomascota }) => {
  return (
    <div className="product-card-container">
    <div className='background-card'>
    <div className="product-card2">
        <img src={imageUrl} alt={title} className="product-image2" />
        <div className="product-details2">
        <h2 className="product-title2">{title}</h2>
        <p className="product-description2">{description}</p>
        <p className="product-genero2">{genero}</p>
        {tipomascota && <p className="product-tipomascota">{tipomascota}</p>}
      </div>
    </div>
    </div>
    </div>
  );
};

export default ProductCard;

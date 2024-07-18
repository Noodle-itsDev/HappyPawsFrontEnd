import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
  rebordefelinos?: string;
  imageUrl: string;
  title: string;
  description: string;
  genero: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ rebordefelinos, imageUrl, title, description, genero }) => {
  return (
    <div className="product-card-container">
      <div className="reborde-felinos-container">
        <img src={rebordefelinos} className="reborde-felinos" />
      </div>
      <div className="background-card">
        <div className="product-card">
          <img src={imageUrl} alt={title} className="product-image" />
          <div className="product-details">
            <h2 className="product-title">{title}</h2>
            <p className="product-description">{description}</p>
            <p className="product-genero">Genero: {genero}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

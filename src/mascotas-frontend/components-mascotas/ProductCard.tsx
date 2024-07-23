import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  genero: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, description, genero }) => {
  return (
    <div className="product-card-container">
      <div className="background-card">
        <div className="product-card">
          <img src={imageUrl} alt={title} className="product-image" />
          <div className="product-details">
            <h2 className="product-title">{title}</h2>
            <p className="product-description">{description}</p>
            <p className="product-genero">{genero}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

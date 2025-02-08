import React from "react";
import "./ProductCard.css";

interface ProductCardProps {
  imgSrc: string;
  name: string;
  price: number;
  onClick: () => void; // Thêm prop onClick
}

const ProductCard: React.FC<ProductCardProps> = ({ imgSrc, name, price, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={imgSrc} alt={name} className="product-img" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductCard;

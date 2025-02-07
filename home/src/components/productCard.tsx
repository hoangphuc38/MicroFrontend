import React from "react";
import "./productCard.css";

interface ProductCardProps {
  imgSrc: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ imgSrc, name, price }) => {
  return (
    <div className="product-card">
      <img src={imgSrc} alt={name} className="product-img" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">{price.toLocaleString()} VND</p>
      </div>
    </div>
  );
};

export default ProductCard;

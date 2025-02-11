import React from "react";
import "./ProductCard.css";
import background from "../asset/images/TOTY-Icon.png";

interface ProductCardProps {
  imgSrc: string;
  name: string;
  price: number;
  sold: number;
  onClick: () => void; // Thêm prop onClick
}

const WinterCard: React.FC<ProductCardProps> = ({
  imgSrc,
  name,
  price,
  sold,
  onClick,
}) => {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-card-bg-container">
        <img className="product-card-bg" src={background} />
      </div>
      <div className="product-card-detail">
        <img src={imgSrc} alt={name} className="product-img" />
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <p className="product-price">${price.toLocaleString()}</p>
          <p className="product-sold">Sold: {sold}</p>
        </div>
      </div>
    </div>
  );
};

export default WinterCard;

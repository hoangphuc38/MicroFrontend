import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/sport.css";
import DropdownMenu from "../components/dropdownMenu";
import ProductCard from "../components/productCard";
import sportApi from "../api/sportApi";

interface ProductImage {
  id: number;
  productId: string;
  imageURL: string;
}

interface Product {
  productID: string;
  productName: string;
  price: number;
  images: ProductImage[];
}

export default function Sport() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<any[]>([]);

  return (
    <div className="sport_container">
      <div className="link_container">
        <nav>Home</nav>
        <span>{">"}</span>
        <nav>Sport Products</nav>
      </div>
      <div className="filter_container">
        <h2>Sport Products</h2>
        <DropdownMenu />
      </div>
      <div className="product-list">
        {Array.isArray(products) ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              imgSrc={product.image}
              name={product.name}
              price={product.price}
              onClick={() => navigate(`/product/details/${product.id}`)}
            />
          ))
        ) : (
          <p>Không có sản phẩm nào</p> // Hiển thị thông báo nếu không có dữ liệu
        )}
      </div>
    </div>
  );
}

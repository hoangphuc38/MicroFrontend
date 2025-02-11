import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../pages/winter.css";
import DropdownMenu from "../components/dropdownMenu";
import ProductCard from "../components/productCard";
import imgTest from "../asset/images/liverpool.jpg";
import baseURL from "../api/constURL";
import WinterCard from "../components/winterCard";

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
  sold: number
}

export default function Winter() {
  const navigate = useNavigate(); // Hook điều hướng
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${baseURL}Product/get-by-category/Outdoor`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        console.log("Dữ liệu sản phẩm:", data);
        setProducts(data || []);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="winter_container">
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
      <div className="link_container">
        <nav onClick={() => navigate("/")}>Home</nav>
        <span>{">"}</span>
        <nav onClick={() => navigate("/winter")}>Winter Products</nav>
      </div>
      <div className="filter_container">
        <h2>Winter Products</h2>
        <DropdownMenu />
      </div>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <WinterCard
              key={product.productID} // Sử dụng productID
              imgSrc={product.images[0]?.imageURL || "placeholder.jpg"}
              name={product.productName}
              price={product.price}
              sold={product.sold}
              onClick={() => navigate(`/product/winterProduct/details/${product.productID}`)}
            />
          ))
        ) : (
          <p>Không có sản phẩm nào</p>
        )}
      </div>
    </div>
  );
}

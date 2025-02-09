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
  const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await sportApi.getAll(); // Gọi API
  //       setProducts(response); // Cập nhật state
  //       console.log("dữ liệu test", sportApi.getAll());
  //     } catch (error) {
  //       console.error("Lỗi khi lấy sản phẩm:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://deb5-125-235-233-43.ngrok-free.app/api/Product/get-by-category/Indoor", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
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
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.productID} // Sử dụng productID
              imgSrc={product.images[0]?.imageURL || "placeholder.jpg"} // Lấy ảnh đầu tiên
              name={product.productName}
              price={product.price}
              onClick={() => navigate(`/product/details/${product.productID}`)}
            />
          ))
        ) : (
          <p>Không có sản phẩm nào</p>
        )}
      </div>
    </div>
  );
}

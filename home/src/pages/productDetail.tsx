import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import baseURL from "../api/constURL";
import "../pages/productDetail.css";
import itemImg from "../asset/images/liverpool.jpg";
import RatingStars from "../components/ratingStar";
import SizeSelector from "../components/sizeSelector";

interface ProductImage {
  id: number;
  productId: string;
  imageURL: string;
}

interface Product {
  productID: string;
  productName: string;
  price: number;
  reviewPoint: number;
  images: ProductImage[];
}

export default function ProductDetail() {
  const { id } = useParams(); // Lấy tham số từ URL
  const [product, setProduct] = useState<Product | null>(null); // 🛠 Sửa undefined thành null để dễ kiểm tra

  useEffect(() => {
    if (!id) return; // Nếu không có id, không gọi API

    const fetchProductDetail = async () => {
      try {
        const response = await fetch(`${baseURL}Product/detail/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        });

        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        console.log("Dữ liệu sản phẩm:", data);
        setProduct(data);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
      }
    };

    fetchProductDetail();
  }, [id]); // 🛠 Thêm id vào dependency array

  return (
    <div className="detail_container">
      <div className="link_container">
        <nav>Home</nav>
        <span>{">"}</span>
        <nav>Winter Products</nav>
        <span>{">"}</span>
        <nav>Liverpool Kit 2024</nav>
      </div>

      {product ? (
        <div className="product-infor">
          <div className="product-image">
            <img
              src={product.images?.length ? product.images[0].imageURL : itemImg}
              alt={product.productName}
            />
          </div>
          <div className="product-detail">
            <div className="detail-name">
              <h1>{product.productName}</h1>
            </div>
            <RatingStars rating={product.reviewPoint} />
            <h2 className="detail-price">$ {product.price.toLocaleString()}</h2>
            <SizeSelector />
            <button className="add_to_cart_btn">Add to Cart</button>
          </div>
        </div>
      ) : (
        <p>Đang tải dữ liệu sản phẩm...</p>
      )}
    </div>
  );
}

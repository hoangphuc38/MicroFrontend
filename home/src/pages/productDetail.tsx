import { useParams } from "react-router-dom";
import "../pages/productDetail.css";

export default function ProductDetail() {
  const { id } = useParams(); // Lấy tham số từ URL

  return (
    <div className="detail_container">
      <div className="link_container">
        <nav>Home</nav>
        <span>{">"}</span>
        <nav>Winter Products</nav>
        <span>{">"}</span>
        <nav>Liverpool Kit 2024</nav>
      </div>
      <p>Đây là chi tiết sản phẩm: {id}</p>
    </div>
  );
}

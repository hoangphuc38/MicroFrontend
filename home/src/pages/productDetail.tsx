import { useParams } from "react-router-dom";
import "../pages/productDetail.css";
import itemImg from '../asset/images/liverpool.jpg'

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
      <div className="product-info">
        <div className="product-img">
            <img src={itemImg}></img>
        </div>
        <div className="product-detail">
            <div className="detail-name">
                <h1>Liverpool Kit 2024</h1>
            </div>
        </div>
      </div>
    </div>
  );
}

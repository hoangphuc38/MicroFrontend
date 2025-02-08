import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams(); // Lấy tham số từ URL

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Đây là chi tiết sản phẩm: {id}</p>
    </div>
  );
}
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import baseURL from "../api/constURL";
import "../pages/productDetail.css";
import itemImg from "../asset/images/liverpool.jpg";
import RatingStars from "../components/ratingStar";
import SizeSelector from "../components/sizeSelector";
import { useNavigate } from "react-router-dom";
import { CheckCircle, XCircle } from "lucide-react";

const ToastMessage = ({ message, type, show }) => {
  return (
    <div className={`toast ${type} ${show ? "show" : ""}`}>
      {type === "success" ? (
        <CheckCircle className="icon success-icon" />
      ) : (
        <XCircle className="icon error-icon" />
      )}
      <span>{message}</span>
    </div>
  );
};

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
  const [toast, setToast] = useState({ message: "", type: "", show: false });

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type, show: true });

    setTimeout(() => {
      setToast({ message: "", type: "", show: false });
    }, 3000);
  };

  const navigate = useNavigate(); // Hook điều hướng
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
  }, [id]);

  const handleAddToCart = async () => {
    const token = window.sessionStorage.getItem("auth-user");
    if (!token) {
      navigate(`/auth?returnUrl=${window.location.pathname}`);
    } else {
      try {
        const requestData = {
          customerID: token.toString().replace(/"/g, ""),
          productID: id,
          quantity: 1,
        };
        const response = await fetch(`${baseURL}Cart/add-to-cart`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
          body: JSON.stringify(requestData),
        });

        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        showToast("Successfully add product to Cart", "success");
        setTimeout(() => {
          navigate("/cart");
        }, 1500);
        console.log("Thêm vào giỏ hàng thành công:", data);
      } catch (error) {
        console.error("Lỗi khi thêm vào sản phẩm:", error);
        showToast("Failed to add product to cart", "error");
      }
    }
  };

  return (
    <div className="detail_container">
      <div className="link_container">
        <nav onClick={() => navigate("/")}>Home</nav>
        <span>{">"}</span>
        <nav onClick={() => navigate("/winter")}>Winter Products</nav>
        <span>{">"}</span>
        {product ? <nav>{product.productName}</nav> : <></>}
      </div>

      {product ? (
        <div className="product-infor">
          <div className="react-product-image">
            <img
              src={
                product.images?.length ? product.images[0].imageURL : itemImg
              }
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
            <button className="add_to_cart_btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <p>Đang tải dữ liệu sản phẩm...</p>
      )}
      {/* Hiển thị Toast Message */}
      <ToastMessage
        message={toast.message}
        type={toast.type}
        show={toast.show}
      />
    </div>
  );
}

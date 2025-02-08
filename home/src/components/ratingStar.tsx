import React from "react";
import "./RatingStar.css";

interface RatingStarsProps {
  rating: number; // Điểm đánh giá từ 0 - 5
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  const maxStars = 5;
  const filledStars = Math.floor(rating); // Số sao đầy
  const hasHalfStar = rating % 1 !== 0; // Kiểm tra có nửa sao không

  return (
    <div className="rating-stars">
      {/* Hiển thị các sao đầy */}
      {[...Array(filledStars)].map((_, index) => (
        <span key={index} className="star filled">★</span>
      ))}

      {/* Hiển thị nửa sao nếu có */}
      {hasHalfStar && <span className="star half">★</span>}

      {/* Hiển thị các sao rỗng còn lại */}
      {[...Array(maxStars - filledStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
        <span key={index} className="star empty">☆</span>
      ))}
    </div>
  );
};

export default RatingStars;
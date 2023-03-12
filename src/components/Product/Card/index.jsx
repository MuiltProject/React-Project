import React from "react";

import "./index.styled.css";
import { Link } from "react-router-dom";

// productId : 제품의 고유 번호
// productImg : 제품의 대표 이미지
// productName : 제품의 이름
// productPrice : 제품의 가격
function Card({ productId, productImg, productName, productPrice }) {
  const formatPrice = Number(productPrice).toLocaleString();
  return (
    <div className="img-container">
      <Link to={`/details/${productId}`}>
        <img className="image" src={productImg} alt=""></img>
      </Link>
      <div>
        <div className="text">
          <h3>{productName}</h3>
          <h4>{formatPrice}원</h4>
        </div>
      </div>
    </div>
  );
}
export default Card;
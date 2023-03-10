import React, { useState } from "react";
import c1 from "../../../assets/Details/c1.jpg";
import c2 from "../../../assets/Details/c2.jpg";
import c3 from "../../../assets/Details/c3.jpg";
import c4 from "../../../assets/Details/c4.jpg";
import c5 from "../../../assets/Details/c5.jpg";
import styled from "@emotion/styled";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const Button = styled.button`
  background-color: white;
  color: black;
  font-size: 50px;
  border: none;
  cursor: pointer;
`;

const TextStyle = {
  textAlign: "right",
};

function RelatedProduct() {
  const data = [
    { image: c1, product: "코트1", price: "110,000원" },
    { image: c2, product: "코트2", price: "120,000원" },
    { image: c3, product: "코트3", price: "130,000원" },
    { image: c4, product: "코트4", price: "140,000원" },
    { image: c5, product: "코트5", price: "150,000원" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [numVisible /*, setNumVisible*/] = useState(3);

  // 왼쪽 화살표 클릭 시 왼쪽 이미지 show
  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(data.length - numVisible);
    }
  };
  // 오른쪽 화살표 클릭 시 오른쪽 이미지 show
  const handleNextClick = () => {
    if (currentIndex + numVisible < data.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const visibleData = data.slice(currentIndex, currentIndex + numVisible);
  // 연관상품을 carousel로 구현: 이미지 하단에 상품 이름과 가격 표시
  return (
    <div className="Related">
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={handlePrevClick}>
            <BsChevronLeft />
          </Button>
          {visibleData.map((item, index) => (
            <div key={index} style={{ margin: "0 30px" }}>
              <img src={item.image} alt="carousel-thumbnail" style={{ width: "200px", height: "250px" }} />
              <p style={TextStyle}>
                {item.product}
                <br />
                {item.price}
              </p>
            </div>
          ))}
          <Button onClick={handleNextClick}>
            <BsChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RelatedProduct;

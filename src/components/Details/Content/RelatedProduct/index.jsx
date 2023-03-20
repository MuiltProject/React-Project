import React, { useState, useEffect } from "react";
import c1 from "../../../../assets/Details/c1.jpg";
import c2 from "../../../../assets/Details/c2.jpg";
import c3 from "../../../../assets/Details/c3.jpg";
import c4 from "../../../../assets/Details/c4.jpg";
import c5 from "../../../../assets/Details/c5.jpg";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import * as S from "./index.styled";
import Data from "../../Data/detailsdata.json"
import axios from "axios";

function RelatedProduct() {
  const data = [
    { image: c1, product: "코트1", price: "110,000원" },
    { image: c2, product: "코트2", price: "120,000원" },
    { image: c3, product: "코트3", price: "130,000원" },
    { image: c4, product: "코트4", price: "140,000원" },
    { image: c5, product: "코트5", price: "150,000원" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [numVisible] = useState(4);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(data.length - numVisible);
    }
  };

  const handleNextClick = () => {
    if (currentIndex + numVisible < data.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const visibleData = data.slice(currentIndex, currentIndex + numVisible);
  
  return (
        <S.Container >
          <S.Button onClick={handlePrevClick}>
            <BsChevronLeft />
          </S.Button>
          {visibleData.map((item, index) => (
            <S.ImageContainer key={index}>
              <S.Image src={item.image} alt="carousel-thumbnail" />
              <S.Text>
                {item.product}
                <br />
                {item.price}
              </S.Text>
            </S.ImageContainer>
          ))}
          <S.Button onClick={handleNextClick}>
            <BsChevronRight />
          </S.Button>
      </S.Container>
  );
}

export default RelatedProduct;

import React, { useState } from "react";
import { Carousel } from 'react-bootstrap';
import c1 from '.././images/c1.jpg';
import c2 from '.././images/c2.jpg';
import c3 from '.././images/c3.jpg';
import c4 from '.././images/c4.jpg';
import c5 from '.././images/c5.jpg';
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";



const Button = styled.button`
  background-color: white;
  color: black;
  font-size: 50px;
  border:none;
  cursor: pointer;
  
`;
const ContainerStyle = {
  width: "600px", 
height: "530px", 
 
};

function RelatedProduct() {
  const data = [
    { image: c1 },
    { image: c2 },
    { image: c3 },
    { image: c4 },
    { image: c5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [numVisible, setNumVisible] = useState(3);

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
    <div className="Related">
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={handlePrevClick}><FontAwesomeIcon icon={ faAngleLeft } /></Button>
          {visibleData.map((item, index) => (
            <div key={index} style={{ margin: "0 30px"}}>
              <img src={item.image} alt="carousel-thumbnail" style={{ width: "250px", height: "300px"}} />
            </div>
          ))}
          <Button onClick={handleNextClick}><FontAwesomeIcon icon={ faAngleRight } /></Button>
        </div>
      </div>
    </div>
  );
}

export default RelatedProduct;


import React from "react";
import "./index.styled.css";
import Card from "../../components/Product/Card";

// 제품의 고유 번호, 대표 이미지, 태그1, 태그2, 제품 이름, 가격
const Product = () => {
  return (
    <div className="Container">
      <div className="TextBox">
        <h2>New Arrival</h2>
      </div>
      <hr></hr>
      <div>
        <Card productId={"1"} productImg={"img/03.jpg"} productName={"데님 자켓"} productPrice={218000} />
        <Card productId={"2"} productImg={"img/04.jpg"} productName={"데님 자켓"} productPrice={218000} />
        <Card productId={"3"} productImg={"img/05.jpg"} productName={"가죽 자켓"} productPrice={218000} />
        <Card productId={"4"} productImg={"img/06.jpg"} productName={"데님 자켓"} productPrice={218000} />
        <Card productId={"5"} productImg={"img/07.jpg"} productName={"롱 무엇"} productPrice={218000} />
        <Card productId={"6"} productImg={"img/08.jpg"} productName={"후드티"} productPrice={218000} />
      </div>
    </div>
  );
};

export default Product;

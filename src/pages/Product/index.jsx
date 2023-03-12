import React from "react";
import "./index.styled.css";
import Card from "../../components/Product/Card";

import Json from "../../data/product/data.json";
import NotFound from "../../components/Product/NotFound";

// 제품의 고유 번호, 대표 이미지, 태그1, 태그2, 제품 이름, 가격
const Product = () => {
  const total = Json.count;

  if (total === 0) {
    return (
      <div className="Container">
        <div className="TextBox">
          <h1>Products</h1>
        </div>
        <div className="Wrapper">
          <NotFound />
        </div>
      </div>
    );
  } else {
    const cards = Json.products.map((product) => {
      return <Card key={product.id} product={product} />;
    });
    return (
      <div className="Container">
        <div className="TextBox">
          <h1>Products</h1>
        </div>
        <div className="Wrapper">{cards}</div>
      </div>
    );
  }
};

export default Product;

import React from "react";
import "./index.styled.css";
import Card from "../../components/Product/Card";

import Json from "../../data/Product/data.json";
import NotFound from "../../components/Product/NotFound";

// 제품의 고유 번호, 대표 이미지, 태그1, 태그2, 제품 이름, 가격
const Product = () => {
  // TODO: 추후 axios로 API 호출하는 로직 필요

  return (
    <div className="Container">
      <div className="TextBox">
        <h1>Products</h1>
      </div>
      <p className="Text">{Json.count} 상품</p>
      <div className="Wrapper">
        {Json.count === 0 ? (
          <NotFound />
        ) : (
          Json.products.map((product) => {
            return <Card key={product.id} product={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default Product;

import React, { useEffect, useState } from "react";

import "./index.styled.css";
import Card from "../../components/Product/Card";

import Json from "../../data/product/data.json";
import NotFound from "../../components/Product/NotFound";
import CategoryNav from "../../components/CategoryNav";
import axios from "axios";

// 제품의 고유 번호, 대표 이미지, 태그1, 태그2, 제품 이름, 가격

const Product = () => {
  // TODO: 추후 axios로 API 호출하는 로직 필요
  const [data, setData] = useState([]);

  // TODO: API 서버 구축후 해당 URL로 변경
  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // TODO: 추후 Json.products => data로 변경
  return (
    <div className="Container">
      <div className="TextBox">
        <h1>Products</h1>
      </div>
      <p className="Text">{Json.products.length} 상품</p>
      {Json.products.length === 0 ? <p></p> : <CategoryNav />}
      <div className="Wrapper">
        {Json.products.length === 0 ? (
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

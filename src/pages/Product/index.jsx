import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import Card from "../../components/Product/Card";
import Json from "../../data/product/data.json";
import NotFound from "../../components/Product/NotFound";
import CategoryNav from "../../components/CategoryNav";

import "./index.styled.css";

// 제품의 고유 번호, 대표 이미지, 태그1, 태그2, 제품 이름, 가격

const Product = () => {
  const [data, setData] = useState([]);

  // TODO: API 서버 구축후 해당 URL로 변경
  const getData = useCallback(async () => {
    await axios
      .get(`http://localhost:4000/products`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryClick = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  // TODO: 추후 Json을 Data로 변경
  const filteredData = selectedCategory.includes("all")
    ? Json.products
    : Json.products.filter((product) => product.category.includes(selectedCategory));

  return (
    <div className="Container">
      <div className="TextBox">
        <h1>Products</h1>
      </div>
      <p className="Text">{filteredData.length} 상품</p>
      <CategoryNav selectedCategory={selectedCategory} onClick={handleCategoryClick} />
      <div className="Wrapper">
        {filteredData.length === 0 ? (
          <NotFound />
        ) : (
          filteredData.map((product) => {
            return <Card key={product.id} product={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default Product;

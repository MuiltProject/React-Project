import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import Card from "../../components/Product/Card";
import Json from "../../data/Product/data.json";

import NotFound from "../../components/Product/NotFound";
import { CategoryNav, TargetNav } from "../../components/FilterNav";

import "./index.styled.css";
import { useSearchParams } from "react-router-dom";

// 제품의 고유 번호, 대표 이미지, 태그1, 태그2, 제품 이름, 가격

const Product = () => {
  const [data, setData] = useState([]);
  const [params, setParams] = useSearchParams();
  const [category, setCategory] = useState("all");
  const [target, setTarget] = useState("all");

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

  const getCategoryParam = useCallback(async () => {
    const param = params.get("category");
    if (param !== null) {
      setCategory(param);
    }
  }, [params]);

  const getTargetParam = useCallback(async () => {
    const param = params.get("target");
    if (param !== null) {
      setTarget(param);
    }
  }, [params]);

  useEffect(() => {
    getTargetParam();
    getCategoryParam();
    getData();
  }, [getData, getTargetParam, getCategoryParam]);

  console.log(data);

  const handleCategoryClick = useCallback((category) => {
    setCategory(category);
  }, []);

  const handleTargetClick = useCallback((target) => {
    setTarget(target);
  }, []);

  // TODO: 추후 Json.products을 Data로 변경
  const filteredData =
    category === "all" ? Json.products : Json.products.filter((product) => product.category === category);

  const CompleteFilteredData =
    target === "all" ? filteredData : filteredData.filter((product) => product.target === target);

  return (
    <div className="Container">
      <div className="TextBox">
        <h1>Products</h1>
      </div>
      <div className="NavBar">
        <div className="Toggle">
          <TargetNav selectedTarget={target} onClick={handleTargetClick} />
          <CategoryNav selectedCategory={category} onClick={handleCategoryClick} />
        </div>
        <div className="Count">
          <p className="Text">{CompleteFilteredData.length} 상품</p>
        </div>
      </div>
      <div className="Wrapper">
        {CompleteFilteredData.length === 0 ? (
          <NotFound />
        ) : (
          CompleteFilteredData.map((product) => {
            return <Card key={product.id} product={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default Product;

import React from "react";
import { Link } from "react-router-dom";

import * as S from "./index.styled";
import Pic1 from "../../assets/Category/women.jpg";

function Category() {
  return (
    <S.Container>
      <S.Wrapper>
        <h1> Shop By Category </h1>
      </S.Wrapper>
      <S.Wrapper>
        <Link to="/example/hats">
          <S.Pic src={Pic1}></S.Pic>
        </Link>
        <Link to="/example/tops">
          <S.Pic src={Pic1}></S.Pic>
        </Link>
        <Link to="example/bags">
          <S.Pic src={Pic1}></S.Pic>
        </Link>
        <Link to="example/pants">
          <S.Pic src={Pic1}></S.Pic>
        </Link>
      </S.Wrapper>
    </S.Container>
  );
}
export default Category;

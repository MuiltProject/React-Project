import React from "react";

import * as S from "./index.styled";

import Total from "../../assets/Category/total.jpg";
import Bag from "../../assets/Category/bag.jpg";
import Basic from "../../assets/Category/basic.jpg";
import Hat from "../../assets/Category/hat.jpg";
import Outer from "../../assets/Category/outer.jpg";
import Pant from "../../assets/Category/pant.jpg";
import Shoes from "../../assets/Category/shoes.jpg";
import Top from "../../assets/Category/top.png";

function Category() {
  // TODO: 이미지 변경 필요
  // 카테고리는 위에서 아래순으로 신상품, 모자, 아우터, 상의, 가방, 하의, 신발, 베이직 순이다.
  return (
    <S.Container>
      <S.Header> Shop By Category </S.Header>
      <S.Section>
        <S.StyledLink to="/product">
          <S.Text>전체</S.Text>
          <S.Pic src={Total}></S.Pic>
        </S.StyledLink>
        <S.StyledLink to="/product?category=hat">
          <S.Text>모자</S.Text>
          <S.Pic src={Hat}></S.Pic>
        </S.StyledLink>
        <S.StyledLink to="/product?category=outer">
          <S.Text>아우터</S.Text>
          <S.Pic src={Outer}></S.Pic>
        </S.StyledLink>
        <S.StyledLink to="/product?category=top">
          <S.Text>상의</S.Text>
          <S.Pic src={Top}></S.Pic>
        </S.StyledLink>
      </S.Section>
      <S.Section>
        <S.StyledLink to="/product?category=bag">
          <S.Text>가방</S.Text>
          <S.Pic src={Bag}></S.Pic>
        </S.StyledLink>
        <S.StyledLink to="/product?category=pant">
          <S.Text>하의</S.Text>
          <S.Pic src={Pant}></S.Pic>
        </S.StyledLink>
        <S.StyledLink to="/product?category=shoes">
          <S.Text>신발</S.Text>
          <S.Pic src={Shoes}></S.Pic>
        </S.StyledLink>
        <S.StyledLink to="/product?category=basic">
          <S.Text>베이직</S.Text>
          <S.Pic src={Basic}></S.Pic>
        </S.StyledLink>
      </S.Section>
    </S.Container>
  );
}
export default Category;

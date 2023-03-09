import React from "react";

import * as S from "./index.styled";
import Pic1 from "../../assets/Category/women.jpg";

function Category() {
  // TODO: 이미지 변경 필요
  // 카테고리는 위에서 아래순으로 신상품, 모자, 아우터, 상의, 가방, 하의, 신발, 베이직 순이다.
  return (
    <S.Container>
      <S.Section>
        <h1> Shop By Category </h1>
      </S.Section>
      <S.Section>
        <S.StyledLink to="/example/new">
          <S.Text>신상품</S.Text>
          <S.Pic src={Pic1}></S.Pic>
        </S.StyledLink>
        <S.StyledLink to="/example/hats">
          <S.Text>모자</S.Text>
          <S.Pic src={Pic1}></S.Pic>
        </S.StyledLink>
        <S.StyledLink to="example/outers">
          <S.Text>아우터</S.Text>
          <S.Pic src={Pic1}></S.Pic>
        </S.StyledLink>
        <S.StyledLink to="example/tops">
          <S.Text>상의</S.Text>
          <S.Pic src={Pic1}></S.Pic>
        </S.StyledLink>
      </S.Section>
      <S.Section>
        <S.StyledLink to="example/bags">
          <S.Text>가방</S.Text>
          <S.Pic src={Pic1}></S.Pic>
        </S.StyledLink>
        <S.StyledLink to="example/pants">
          <S.Text>하의</S.Text>
          <S.Pic src={Pic1}></S.Pic>
        </S.StyledLink>
        <S.StyledLink to="example/shoes">
          <S.Text>신발</S.Text>
          <S.Pic src={Pic1}></S.Pic>
        </S.StyledLink>
        <S.StyledLink to="example/basic">
          <S.Text>베이직</S.Text>
          <S.Pic src={Pic1}></S.Pic>
        </S.StyledLink>
      </S.Section>
    </S.Container>
  );
}
export default Category;

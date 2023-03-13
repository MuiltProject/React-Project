import React from "react";

import * as S from "./index.styled";

// TODO: 추후 분리할 예정
import { Bag, Basic, Hat, Outer, Pant, Shoes, Top, Total } from "../../assets/Category/image";

const MAIN_CATEGORIES = [
  {
    text: "전체",
    img: Total,
    path: "/product",
  },
  {
    text: "모자",
    img: Hat,
    path: "/product?category=hat",
  },
  {
    text: "아우터",
    img: Outer,
    path: "/product?category=outer",
  },
  {
    text: "상의",
    img: Top,
    path: "/product?category=top",
  },
  {
    text: "가방",
    img: Bag,
    path: "/product?category=bag",
  },
  {
    text: "바지",
    img: Pant,
    path: "/product?category=pant",
  },
  {
    text: "신발",
    img: Shoes,
    path: "/product?category=shoes",
  },
  {
    text: "베이직",
    img: Basic,
    path: "/product?category=basic",
  },
];

function Category() {
  // 카테고리는 위에서 아래순으로 신상품, 모자, 아우터, 상의, 가방, 하의, 신발, 베이직 순이다.
  return (
    <S.Container>
      <S.Header> Shop By Category </S.Header>
      <S.Section>
        {MAIN_CATEGORIES.map((category) => {
          return (
            <>
              <S.StyledLink to={category.path}>
                <S.Text>{category.text}</S.Text>
                <S.Pic src={category.img}></S.Pic>
              </S.StyledLink>
            </>
          );
        })}
      </S.Section>
    </S.Container>
  );
}
export default Category;

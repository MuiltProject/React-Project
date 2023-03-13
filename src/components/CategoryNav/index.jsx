import React from "react";

import * as S from "./index.styled";

const CATEGORIES = [
  {
    name: "all",
    text: "전체",
  },
  {
    name: "hat",
    text: "모자",
  },
  {
    name: "top",
    text: "상의",
  },
  {
    name: "outer",
    text: "아우터",
  },
  {
    name: "bag",
    text: "가방",
  },
  {
    name: "pant",
    text: "바지",
  },
  {
    name: "shoes",
    text: "신발",
  },
  {
    name: "basic",
    text: "베이직",
  },
];

function CategoryNav({ selectedCategory, onClick }) {
  return (
    <S.Container>
      {CATEGORIES.map((cate) => {
        const isSelected = selectedCategory.includes(cate.name);
        return (
          <S.StyledButton
            key={cate.name}
            variant={isSelected ? "contained" : "outlined"}
            onClick={() => onClick(cate.name)}
          >
            {cate.text}
          </S.StyledButton>
        );
      })}
    </S.Container>
  );
}
export default CategoryNav;

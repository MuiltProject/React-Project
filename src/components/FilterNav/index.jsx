import React from "react";

import * as S from "./index.styled";

import { CATEGORIES, TARGETS } from "../../constants/category";

function CategoryNav({ selectedCategory, onClick }) {
  return (
    <S.Container>
      {CATEGORIES.map((cate) => {
        const isSelected = selectedCategory === cate.name;
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

function TargetNav({ selectedTarget, onClick }) {
  return (
    <S.Container>
      {TARGETS.map((target) => {
        const isSelected = selectedTarget === target.name;
        return (
          <S.StyledButton
            key={target.name}
            variant={isSelected ? "contained" : "outlined"}
            onClick={() => onClick(target.name)}
          >
            {target.text}
          </S.StyledButton>
        );
      })}
    </S.Container>
  );
}

export { CategoryNav, TargetNav };

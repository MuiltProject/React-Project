import React from "react";
import * as S from "./index.styled";

const Categories = [
  {
    text: "HOME",
    path: "/",
    sign:" > ",
  },
  {
    text: "WOMEN",
    path: "/product",
    sign:" > ",
  },
  {
    text: "OUTER",
    path: "/product?category=outer",
    sign:"",
  },
];

const LinkMenu = () => {
  return (
    <S.Container>
      {Categories.map((category) => (
        <>
          <S.StyledLink to={category.path}>
          {category.text}
          </S.StyledLink>
          {category.sign}
        </>
      ))}
    </S.Container>
  );
};

export default LinkMenu;
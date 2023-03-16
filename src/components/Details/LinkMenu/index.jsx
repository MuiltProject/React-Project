import React from "react";
import * as S from "./index.styled";

const LinkMenu = () => {
  
  return (
    <S.Container>
      <S.StyledLink to="/">
        HOME
      </S.StyledLink>
      <span>{" > "}</span>
      <S.StyledLink to="/product" >
        WOMEN
      </S.StyledLink>
      <span>{" > "}</span>
      <S.StyledLink to="/product" >
        OUTER
      </S.StyledLink>
    </S.Container>
  );
};

export default LinkMenu;

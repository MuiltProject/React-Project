import React from "react";
import * as S from "./index.styled";

const LinkMenu = () => {
  
  return (
    <S.Container>
      <S.StyledLink to="/details">
        HOME
      </S.StyledLink>
      <span>{">"}</span>
      <S.StyledLink to="/details" >
        WOMEN
      </S.StyledLink>
      <span>{">"}</span>
      <S.StyledLink to="/details" >
        OUTER
      </S.StyledLink>
    </S.Container>
  );
};

export default LinkMenu;

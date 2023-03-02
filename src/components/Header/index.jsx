import React from "react";
import * as S from "./index.styled";

function Header() {
  return (
    <S.Container>
      <S.LogoContainer>
        <S.Logo>Shop</S.Logo>
      </S.LogoContainer>
      <S.CategoryContainer></S.CategoryContainer>
      <S.SearchContainer></S.SearchContainer>
      <S.UserContainer></S.UserContainer>
    </S.Container>
  );
}
export default Header;

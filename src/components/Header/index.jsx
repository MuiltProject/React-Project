import React from "react";
import * as S from "./index.styled";
import Logo from "./Logo";
import Category from "./Category";
import Search from "./Search";
import User from "./User";

function Header() {
  return (
    <S.Container>
      <Logo />
      <Category />
      <Search />
      <User />
    </S.Container>
  );
}
export default Header;

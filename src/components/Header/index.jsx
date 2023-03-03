import React from "react";
import * as S from "./index.styled";
import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search";
import User from "./User";

function Header({ children }) {
  return (
    <S.Container>
      <Logo />
      <Nav />
      <Search /> {/*추후 검색 기능 개발*/}
      <User />
    </S.Container>
  );
}
export default Header;

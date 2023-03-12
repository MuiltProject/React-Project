import React from "react";
import * as S from "./index.styled";

// isLogin : Boolean
function User({ isLogin }) {
  // isLogin = true;
  if (isLogin) {
    return (
      <S.Container>
        <S.StyledLink to={"/cart"}>Cart</S.StyledLink>
        <S.StyledLink to={"/my"}>MyPage</S.StyledLink>
      </S.Container>
    );
  }
  return (
    <S.Container>
      <S.StyledLink to={"/login"}>Cart</S.StyledLink>
      <S.StyledLink to={"/login"}>MyPage</S.StyledLink>
    </S.Container>
  );
}
export default User;

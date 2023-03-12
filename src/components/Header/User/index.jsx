import React from "react";
import * as S from "./index.styled";

function User() {
  return (
    <S.Container>
      <S.StyledLink to={"/cart"}>Cart</S.StyledLink>
      <S.StyledLink to={"/login"}>Login</S.StyledLink>
    </S.Container>
  );
}
export default User;

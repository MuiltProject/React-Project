import React from "react";
import * as S from "./index.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function User() {
  return (
    <S.Container>
      <S.IconContainer>
        <S.StyledLink>
          <FontAwesomeIcon icon={faHeart} />
        </S.StyledLink>
      </S.IconContainer>
      <S.IconContainer>
        <S.StyledLink to={"/cart"}>
          <FontAwesomeIcon icon={faBasketShopping} />
        </S.StyledLink>
      </S.IconContainer>
      <S.IconContainer>
        <S.StyledLink to={"/my"}>
          <FontAwesomeIcon icon={faUser} />
        </S.StyledLink>
      </S.IconContainer>
    </S.Container>
  );
}
export default User;

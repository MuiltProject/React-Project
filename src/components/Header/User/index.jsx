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
        <S.Icon>
          <FontAwesomeIcon icon={faHeart} />
        </S.Icon>
      </S.IconContainer>
      <S.IconContainer>
        <S.Icon>
          <FontAwesomeIcon icon={faBasketShopping} />
        </S.Icon>
      </S.IconContainer>
      <S.IconContainer>
        <S.Icon>
          <FontAwesomeIcon icon={faUser} />
        </S.Icon>
      </S.IconContainer>
    </S.Container>
  );
}
export default User;

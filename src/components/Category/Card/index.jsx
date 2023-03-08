import React from "react";

import * as S from "./index.styled";

function Card({ pic, category }) {
  return (
    <S.Container>
      <S.Pic src={pic} alt="pic"></S.Pic>
      <S.Wrapper>
        <p>{category}</p>
      </S.Wrapper>
    </S.Container>
  );
}
export default Card;

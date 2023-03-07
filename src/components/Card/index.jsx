import React from "react";

import * as S from "./index.styled";

function Card({ pic, category }) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Pic src={pic} />
        <S.Header>For {category}</S.Header>
      </S.Wrapper>
    </S.Container>
  );
}
export default Card;

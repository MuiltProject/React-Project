import React from "react";

import * as S from "./index.styled";

function Card({ pic }) {
  return (
    <S.Container>
      <S.Pic src={pic}></S.Pic>
    </S.Container>
  );
}
export default Card;

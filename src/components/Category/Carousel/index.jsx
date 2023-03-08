import React from "react";

import * as S from "./index.styled";

import { LeftArrow, RightArrow } from "../../svg/Arrow";

function Carousel() {
  return (
    <S.Container>
      <LeftArrow />
      <p>카드 입니다.</p>
      <p>카드 입니다.</p>
      <p>카드 입니다.</p>
      <p>카드 입니다.</p>
      <RightArrow />
    </S.Container>
  );
}
export default Carousel;

import React from "react";

import * as S from "./index.styled";

import { LeftArrow, RightArrow } from "../../svg/Arrow";
import Card from "../Card";

function Carousel({ pic, category }) {
  return (
    <S.Container>
      <LeftArrow />
      <Card pic={pic} category={category} />
      <Card pic={pic} category={category} />
      <Card pic={pic} category={category} />
      <Card pic={pic} category={category} />
      <RightArrow />
    </S.Container>
  );
}
export default Carousel;

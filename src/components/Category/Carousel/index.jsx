import React from "react";

import * as S from "./index.styled";

import { LeftArrow, RightArrow } from "../../svg/Arrow";
import Card from "../Card";

function Carousel({ pic, category, url }) {
  return (
    <S.Container>
      <div>
        <LeftArrow />
      </div>
      <S.Wrapper>
        <Card pic={pic} category={category} url={url} />
        <Card pic={pic} category={"shirts"} />
        <Card pic={pic} category={"pants"} />
        <Card pic={pic} category={"shoes"} />
        <Card pic={pic} category={"category"} />
        <Card pic={pic} category={"test"} />
      </S.Wrapper>
      <div>
        <RightArrow />
      </div>
    </S.Container>
  );
}

export default Carousel;

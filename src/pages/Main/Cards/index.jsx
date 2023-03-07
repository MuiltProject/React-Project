import React from "react";
import Card from "../../../components/Card";

import * as S from "./index.styled";

import Kids from "../../../assets/Card/kids.png";
import Men from "../../../assets/Card/men.png";
import Women from "../../../assets/Card/women.png";

function Cards() {
  return (
    <S.Container>
      <S.Wrapper>
        <Card pic={Women} category={"Women"} />
        <Card pic={Men} category={"Men"} />
        <Card pic={Kids} category={"Kids"} />
      </S.Wrapper>
    </S.Container>
  );
}
export default Cards;

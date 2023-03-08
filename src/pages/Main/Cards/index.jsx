import React from "react";

import * as S from "./index.styled";
import Card from "../../../components/Card";

import Kids from "../../../assets/Card/kids.png";
import Men from "../../../assets/Card/men.png";
import Women from "../../../assets/Card/women.png";

function Cards() {
  return (
    <S.Container>
      <S.Wrapper>
        <Card URL={"/example/women"} pic={Women} category={"Women"} />
        <Card URL={"/example/mem"} pic={Men} category={"Men"} />
        <Card URL={"example/kids"} pic={Kids} category={"Kids"} />
      </S.Wrapper>
    </S.Container>
  );
}
export default Cards;

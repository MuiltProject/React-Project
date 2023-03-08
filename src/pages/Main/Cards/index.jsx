import React from "react";
import { Link } from "react-router-dom";

import * as S from "./index.styled";
import Card from "../../../components/Card";

import Kids from "../../../assets/Card/kids.png";
import Men from "../../../assets/Card/men.png";
import Women from "../../../assets/Card/women.png";

function Cards() {
  return (
    <S.Container>
      <S.Wrapper>
        <Link to="/example/women">
          <Card pic={Women} category={"Women"} />
        </Link>
        <Link to="/example/men">
          <Card pic={Men} category={"Men"} />
        </Link>
        <Link to="/example/kids">
          <Card pic={Kids} category={"Kids"} />
        </Link>
      </S.Wrapper>
    </S.Container>
  );
}
export default Cards;

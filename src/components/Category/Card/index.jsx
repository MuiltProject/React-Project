import React from "react";
import { Link } from "react-router-dom";

import * as S from "./index.styled";

function Card({ pic, category, url }) {
  return (
    <S.Container>
      <Link to={url}>
        <S.Pic src={pic} alt="pic"></S.Pic>
      </Link>
      <S.Wrapper>
        <S.Text>{category}</S.Text>
      </S.Wrapper>
    </S.Container>
  );
}
export default Card;

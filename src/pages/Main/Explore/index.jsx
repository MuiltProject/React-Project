import React from "react";
import { Link } from "react-router-dom";

import * as S from "./index.styled";

function Explore() {
  return (
    <S.Container>
      <S.Header>Explore $(4팀)</S.Header>
      <a href={"https://github.com/MultiProject23/React-Project"} target={"_blank"} rel="noreferrer">
        github 저장소
      </a>
      <Link to={"/people"} target={"_blank"}>
        피플
      </Link>
    </S.Container>
  );
}
export default Explore;

import React from "react";

import * as S from "./index.styled";
import "./style.css";

function Loading() {
  return (
    <>
      <S.Container>
        <S.Wrapper />
        <div className="loader ani" />
      </S.Container>
      <S.Container>
        <h1>New content is being imported.</h1>
      </S.Container>
    </>
  );
}
export default Loading;

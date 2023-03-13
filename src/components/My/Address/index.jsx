import React from "react";

import Output from "../Output";

import * as S from "./index.styled";

function Address({ recipient, zipCode, address }) {
  return (
    <S.Container>
      <h3>주소정보 변경</h3>
      <S.Line />
      <S.Wrapper>
        <S.Section>
          <Output directive={"수취인"} value={recipient} />
          <Output directive={"우편번호"} value={zipCode} />
          <Output directive={"주소"} value={address} />
        </S.Section>
      </S.Wrapper>
    </S.Container>
  );
}
export default Address;

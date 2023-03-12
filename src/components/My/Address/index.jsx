import React from "react";

import * as S from "./index.styled";

function Address({ recipient, zipCode, address }) {
  return (
    <S.Container>
      <h3>주소정보 변경</h3>
      <S.Line />
      <S.Wrapper>
        <S.Section>
          <S.TextSection>
            <S.ThinText>수취인</S.ThinText>
            <S.Text>{recipient}</S.Text>
          </S.TextSection>
          <S.TextSection>
            <S.ThinText>우편번호</S.ThinText>
            <S.Text>{zipCode}</S.Text>
          </S.TextSection>
          <S.TextSection>
            <S.ThinText>주소</S.ThinText>
            <S.Text>{address}</S.Text>
          </S.TextSection>
        </S.Section>
      </S.Wrapper>
    </S.Container>
  );
}
export default Address;

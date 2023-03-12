import React from "react";

import * as S from "./index.styled";
import Output from "./Output";

function Profile({ name, email, phoneNumber }) {
  return (
    <S.Container>
      <h3>회원정보 변경</h3>
      <S.Line />
      <S.Wrapper>
        <S.Section>
          <Output directive={"이름"} value={name} />
          <Output directive={"이메일"} value={email} />
          <Output directive={"전화번호"} value={phoneNumber} />
        </S.Section>
      </S.Wrapper>
    </S.Container>
  );
}
export default Profile;

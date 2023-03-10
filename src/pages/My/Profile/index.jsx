import React from "react";

import * as S from "./index.styled";

function Profile({ name, email, phoneNumber }) {
  return (
    <S.Container>
      <h3>회원정보 변경</h3>
      <S.Line />
      <S.Wrapper>
        <S.Section>
          <S.TextSection>
            <S.ThinText>이름</S.ThinText>
            <S.Text>{name}</S.Text>
          </S.TextSection>
          <S.TextSection>
            <S.ThinText>이메일</S.ThinText>
            <S.Text>{email}</S.Text>
          </S.TextSection>
          <S.TextSection>
            <S.ThinText>전화번호</S.ThinText>
            <S.Text>{phoneNumber}</S.Text>
          </S.TextSection>
        </S.Section>
        {/* TODO: 비밀번호 변경폼 만들기 */}
      </S.Wrapper>
    </S.Container>
  );
}
export default Profile;

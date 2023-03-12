import React, { useState } from "react";
import { PasswordForm, EmailForm, PhoneNumberForm } from "./ChangeForm";
import Output from "./Output";

import * as S from "./index.styled";

function Profile({ name, email, phoneNumber }) {
  const [option, setOption] = useState(0); // 0: 비밀번호 변경, 1: 이메일 변경, 2: 전화번호 변경

  const changeOption = (number) => {
    setOption(number);
  };

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
        <S.Section>
          {option === 0 && (
            <>
              <S.NavWrapper>
                <S.NavSelectHeader>비밀번호 변경</S.NavSelectHeader>
                <S.NavHeader onClick={() => changeOption(1)}>이메일 변경</S.NavHeader>
                <S.NavHeader onClick={() => changeOption(2)}>전화번호 변경</S.NavHeader>
              </S.NavWrapper>
              <PasswordForm />
            </>
          )}
          {option === 1 && (
            <>
              <S.NavWrapper>
                <S.NavHeader onClick={() => changeOption(0)}>비밀번호 변경</S.NavHeader>
                <S.NavSelectHeader>이메일 변경</S.NavSelectHeader>
                <S.NavHeader onClick={() => changeOption(2)}>전화번호 변경</S.NavHeader>
              </S.NavWrapper>
              <EmailForm />
            </>
          )}
          {option === 2 && (
            <>
              <S.NavWrapper>
                <S.NavHeader onClick={() => changeOption(0)}>비밀번호 변경</S.NavHeader>
                <S.NavHeader onClick={() => changeOption(1)}>이메일 변경</S.NavHeader>
                <S.NavSelectHeader>전화번호 변경</S.NavSelectHeader>
              </S.NavWrapper>
              <PhoneNumberForm />
            </>
          )}
        </S.Section>
      </S.Wrapper>
    </S.Container>
  );
}
export default Profile;

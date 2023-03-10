import React, { useState } from "react";

import Profile from "./Profile";
import Orders from "./Orders";
import * as S from "./index.styled";

function My() {
  const [option, setOption] = useState(0);

  const changeOption = (number) => {
    setOption(number);
  };

  return (
    <S.Container>
      {option === 0 && (
        <S.Section>
          <S.NavWrapper>
            <S.SelectHeader>회원정보</S.SelectHeader>
            <S.Header onClick={() => changeOption(1)}>주소정보</S.Header>
            <S.Header onClick={() => changeOption(2)}>주문/배송</S.Header>
          </S.NavWrapper>
          <Profile />
        </S.Section>
      )}
      {option === 1 && (
        <S.NavWrapper>
          <S.Header onClick={() => changeOption(0)}>회원정보</S.Header>
          <S.SelectHeader>주소정보</S.SelectHeader>
          <S.Header onClick={() => changeOption(2)}>주문/배송</S.Header>
        </S.NavWrapper>
      )}
      {option === 2 && (
        <S.Section>
          <S.NavWrapper>
            <S.Header onClick={() => changeOption(0)}>회원정보</S.Header>
            <S.Header onClick={() => changeOption(1)}>주소정보</S.Header>
            <S.SelectHeader>주문/배송</S.SelectHeader>
          </S.NavWrapper>
          <Orders />
        </S.Section>
      )}
    </S.Container>
  );
}

export default My;

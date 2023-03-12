import React from "react";

import * as S from "./index.styled";

function NavRow() {
  return (
    <S.Container>
      <S.ProductList>
        <S.Index>전체선택</S.Index>
        <S.Wrapper>제품명</S.Wrapper>
        <S.Quantity>수량</S.Quantity>
        <S.Price>판매가</S.Price>
        <S.EachPrice>금액 합계</S.EachPrice>
        <S.OrderManagement>주문관리</S.OrderManagement>
      </S.ProductList>
      <S.Line />
    </S.Container>
  );
}

function Row({ total, image, name, price, eachPrice, count, orderManagement, totalPrice }) {
  return (
    <S.Container>
      <S.ProductList>
        <S.Index>{total}</S.Index>
        <S.Wrapper>
          <S.StyledLink>
            <S.Pic src={image} alt=""></S.Pic>
            <S.Name>{name}</S.Name>
          </S.StyledLink>
        </S.Wrapper>
        <S.Quantity>{count}</S.Quantity>
        <S.Price>{price}</S.Price>
        <S.EachPrice>{eachPrice}</S.EachPrice>
        <S.OrderManagement>{orderManagement}</S.OrderManagement>
      </S.ProductList>
      <S.Line />
    </S.Container>
  );
}
export { NavRow, Row };

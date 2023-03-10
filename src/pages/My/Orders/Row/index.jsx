import React from "react";

import * as S from "./index.styled";

function Row({ date, orderId, info, option, price, status, prodId }) {
  return (
    <>
      <S.ProductList>
        <S.OrderInfo>
          {date}/{orderId}
        </S.OrderInfo>
        <S.OrderSummary>
          <S.ProdLink to={`/details/${prodId}`} target={"_blank"}>
            {info}
          </S.ProdLink>
          /{option}
        </S.OrderSummary>
        <S.OrderPrice>{price}</S.OrderPrice>
        <S.OrderStatus>{status}</S.OrderStatus>
      </S.ProductList>
      <S.Line />
    </>
  );
}

function NavRow() {
  return (
    <>
      <S.ProductList>
        <S.OrderInfo>주문일/주문번호</S.OrderInfo>
        <S.OrderSummary>상품정보/옵션정보</S.OrderSummary>
        <S.OrderPrice>결제금액</S.OrderPrice>
        <S.OrderStatus>주문상태</S.OrderStatus>
      </S.ProductList>
      <S.Line />
    </>
  );
}
export { Row, NavRow };

import React from "react";

import * as S from "./index.styled";

function Row({ order }) {
  return (
    <>
      <S.ProductList>
        <S.OrderInfo>
          {order.date}/{order.id}
        </S.OrderInfo>
        <S.OrderSummary>
          <S.ProdLink to={`/details/${order.productId}`} target={"_blank"}>
            {order.productInfo}
          </S.ProdLink>
          /{order.productOption}
        </S.OrderSummary>
        <S.OrderPrice>{order.price}</S.OrderPrice>
        <S.OrderStatus>{order.status}</S.OrderStatus>
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

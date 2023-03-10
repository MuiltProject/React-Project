import React from "react";

import * as S from "./index.styled";

function Row({ date, id, info, option, price, status }) {
  return (
    <>
      <S.ProductList>
        <S.OrderInfo>
          {date}/{id}
        </S.OrderInfo>
        <S.OrderSummary>
          {info}/{option}
        </S.OrderSummary>
        <S.OrderPrice>{price}</S.OrderPrice>
        <S.OrderStatus>{status}</S.OrderStatus>
      </S.ProductList>
      <S.Line />
    </>
  );
}
export default Row;

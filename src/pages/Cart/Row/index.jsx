import React from "react";

import * as S from "./index.styled";

function Row({ total, image, name, price, eachPrice, count, orderManagement, totalPrice }) {
  return (
    <>
      <S.ProductList>
        <S.total>{total}</S.total>
        <S.Pic src={image} alt=""></S.Pic>
        <S.name>{name}</S.name>
        <S.count>{count}</S.count>
        <S.price>{price}</S.price>
        <S.eachPrice>{eachPrice}</S.eachPrice>
        <S.orderManagement>{orderManagement}</S.orderManagement>
      </S.ProductList>
      <S.Line />
    </>
  );
}
export default Row;

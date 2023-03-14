import React from "react";
import { Button } from "@mui/material";
import { Checkbox } from "@mui/material";

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

function Row({ cart }) {
  const formatPrice = Number(cart.price).toLocaleString();
  const formatTotalPrice = Number(cart.price * cart.quantity).toLocaleString();
  return (
    <S.Container>
      <S.ProductList>
        <S.Index>
          <Checkbox defaultChecked sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
        </S.Index>
        <S.Wrapper>
          <S.StyledLink to={`/details/${cart.productId}`}>
            <S.Pic src={cart.image} alt=""></S.Pic>
            <S.Name>{cart.name}</S.Name>
          </S.StyledLink>
        </S.Wrapper>
        <S.Quantity>{cart.quantity}</S.Quantity>
        <S.Price>{formatPrice}</S.Price>
        <S.EachPrice>{formatTotalPrice}</S.EachPrice>
        <S.OrderManagement>
          <Button variant="outlined" color="error">
            삭제하기
          </Button>
        </S.OrderManagement>
      </S.ProductList>
      <S.Line />
    </S.Container>
  );
}
export { NavRow, Row };

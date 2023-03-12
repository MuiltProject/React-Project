import React from "react";

import { NavRow, Row } from "../../components/Cart/Row";
import NotFound from "../../components/Cart/NotFound";
import * as S from "./index.styled";

import Json from "../../data/Cart/data.json";

function Cart() {
  return (
    <S.Container>
      <h3>장바구니</h3>
      <S.BoldLine />
      <NavRow />
      {Json.count === 0 ? (
        <NotFound />
      ) : (
        Json.carts.map((cart) => {
          return <Row key={cart.id} cart={cart} />;
        })
      )}
    </S.Container>
  );
}
export default Cart;

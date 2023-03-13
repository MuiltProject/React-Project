import React from "react";
import NotFound from "../../../components/My/NotFound";

import * as S from "./index.styled";
import { Row, NavRow } from "./Row";

function Orders({ count, orders }) {
  return (
    <S.Container>
      <h3>주문 / 배송</h3>
      <S.BoldLine />
      <NavRow />
      {count === 3 ? (
        <NotFound />
      ) : (
        orders.map((order) => {
          return <Row key={order.id} order={order} />;
        })
      )}
    </S.Container>
  );
}
export default Orders;

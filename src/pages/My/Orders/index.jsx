import React from "react";

import * as S from "./index.styled";
import { Row, NavRow } from "./Row";

function Orders() {
  // TODO: 추후 JSON 더미 파일로 테스트 필요함
  return (
    <S.Container>
      <h3>주문 / 배송</h3>
      <S.BoldLine />
      <NavRow />
      <Row date={"2023-03-09"} orderId={"1"} info={"Shoes"} option={"S"} price={"10,000"} status={"결제"} prodId={1} />
      <Row date={"2023-03-10"} orderId={"2"} info={"Pants"} option={"M"} price={"59,000"} status={"취소"} prodId={2} />
      <Row date={"2023-03-10"} orderId={"3"} info={"Dress"} option={"L"} price={"119,000"} status={"결제"} prodId={3} />
    </S.Container>
  );
}
export default Orders;

import React from "react";

import * as S from "./index.styled";
import Row from "./Row";

function Orders() {
  // TODO: 추후 JSON 더미 파일로 테스트 필요함
  return (
    <S.Container>
      <h3>주문 / 배송</h3>
      <S.BoldLine />
      <Row
        date={"주문일"}
        id={"주문번호"}
        info={"상품정보"}
        option={"옵션정보"}
        price={"결제금액"}
        status={"주문상태"}
      />
      <Row date={"2023-03-10"} id={"1"} info={"T-shirts"} option={"L"} price={"10,000"} status="결제" />
    </S.Container>
  );
}
export default Orders;

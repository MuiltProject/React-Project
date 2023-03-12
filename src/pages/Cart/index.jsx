import React from "react";
import * as S from "./index.styled";
import { NavRow, Row } from "./Row";
import image001 from "./Image/image001.png";

function Cart() {
  // TODO: 추후 JSON 더미 파일로 테스트 필요함
  return (
    <S.Container>
      <h3>장바구니</h3>
      <S.BoldLine />
      <NavRow />
      <Row
        total={"1"}
        image={image001}
        name={"바이스윙 윈드브레이커"}
        count={"1"}
        price={"299,000"}
        eachPrice={"299,000"}
        orderManagement={<button>삭제하기</button>}
      />
      <Row
        total={"1"}
        image={image001}
        name={"바이스윙 윈드브레이커"}
        count={"1"}
        price={"299,000"}
        eachPrice={"299,000"}
        orderManagement={<button>삭제하기</button>}
      />
    </S.Container>
  );
}
export default Cart;

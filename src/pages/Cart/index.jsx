import React from "react";
import * as S from "./index.styled";
import Row from "./Row";
import image001 from "./Image/image001.png";

function Cart() {
  // TODO: 추후 JSON 더미 파일로 테스트 필요함
  return (
    <S.Container>
      <h3>장바구니</h3>
      <S.BoldLine />
      <Row
        total={"전체"}
        name={"상품명"}
        count={"수량"}
        price={"판매가"}
        eachPrice={"금액 합계"}
        orderManagement={"주문관리"}
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

      <Row
        total={"2"}
        name={"발마칸 코트"}
        count={"3"}
        price={"231,000"}
        eachPrice={"693,000"}
        orderManagement={<button>삭제하기</button>}
      />

      <Row
        total={"3"}
        name={"클래식 블랙"}
        count={"2"}
        price={"85,500"}
        eachPrice={"171,000"}
        orderManagement={<button>삭제하기</button>}
      />

      <Row
        total={"4"}
        name={"바이스윙 윈드브레이커"}
        count={"2"}
        price={"299,000"}
        eachPrice={"598,000"}
        orderManagement={<button>삭제하기</button>}
      />

      <Row
        total={"5"}
        name={"베이식 블레이저"}
        count={"1"}
        price={"81,900"}
        eachPrice={"598,000"}
        orderManagement={<button>삭제하기</button>}
      />

      <Row
        total={"6"}
        name={"YACHT JACKET"}
        count={"2"}
        price={"111,300"}
        eachPrice={"222,600"}
        orderManagement={<button>삭제하기</button>}
      />
    </S.Container>
  );
}
export default Cart;

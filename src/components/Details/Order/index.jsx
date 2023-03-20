import React from "react";
import SizeButton from "./Button/SizeButton";
import StockButton from "./Button/StockButton";
import DeliveryButton from "./Button/DeliveryButton";
import CartButton from "./Button/CartButton";
import SizeCheck from "./SizeCheck";
import * as S from "./index.styled";

const OrderContainer = () => {
  return (
    <div>
      <ul>
          <S.List>
          <h4>트렌치 코트</h4> 
          </S.List>
          <S.List>159,900 원</S.List> 
          <br />
          <S.List>
            <div>
            <S.BottomLine>10001</S.BottomLine>
            </div>
          </S.List>
        <br />
        <div>
        어깨와 커프스 부분에 탭이 달린 긴소매 디자인. 옆면 포켓 디테일. 
        </div>
        <br />
        <S.BottomLine>사이즈 선택</S.BottomLine>
        <S.Text>
          <SizeCheck/>
        </S.Text>
      </ul>
      <CartButton/>
      <br />
      <SizeButton/>
      <StockButton/>
      <DeliveryButton/>
    </div>
  );
};

export default OrderContainer;
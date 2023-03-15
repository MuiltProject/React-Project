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
        <S.BottomLine>
          <S.List>
            <h4>왁스드 코튼 트렌치 코트</h4>
          </S.List>

          <S.List>159,900 원</S.List>
          <br />
          <S.List>
            <div>
              {/* 색상 및 제품코드 */}
              <span>색상 </span>|<span> 제품코드</span>
            </div>
          </S.List>
          <br />
        </S.BottomLine>

        <br />
        <div>
          <S.Text>
            라펠 칼라 트렌치 코트. 어깨와 커프스 부분에 탭이 달린 긴소매 디자인. 옆면 포켓 디테일. 같은 소재 리본 스타일
            벨트.
          </S.Text>
        </div>
        <br />

        <S.BottomLine>사이즈 선택</S.BottomLine>
        <S.Text>
          <SizeCheck />
        </S.Text>
      </ul>

      <CartButton></CartButton>
      <br />
      <SizeButton></SizeButton>
      <StockButton></StockButton>
      <DeliveryButton></DeliveryButton>
    </div>
  );
};

export default OrderContainer;

import React from "react";
import SizeButton from "./SizeButton";
import StockButton from "./StockButton";
import DeliveryButton from "./DeliveryButton";
import CartButton from "./CartButton";
import SizeCheck from "./SizeCheck";
import styled from "@emotion/styled";

const ListStyle = {
  listStyleType: "none"
};

const BorderBottomStyle = {
  borderBottomColor: '#807675',
  borderBottomWidth: '2px',
  borderBottomStyle: 'solid'
};

const BorderTopStyle = {
  borderTopColor: '#807675',
  borderTopWidth: '2px',
  borderTopStyle: 'solid',
  paddingTop: '30px'
};

const Location = {
  display: "flex", 
  justifyContent: "center" 
};

const OrderContainer = () => {

  return(
<div>
  
<ul>
 
  <div style={ BorderBottomStyle }>

<li style={ ListStyle }>
<h4>왁스드 코튼 트렌치 코트</h4>
</li>

<li style={ ListStyle }>
159,900 원
</li>
<br/>
<li style={ ListStyle }>
  <div>
    {/* 색상 및 제품코드 */}
  <span>색상 </span>|<span> 제품코드</span>
  </div>
</li>
<br/>
</div>

<br/>
<div>
    
    <div style={ Location }>
    라펠 칼라 트렌치 코트. 어깨와 커프스 부분에 탭이 달린 긴소매 디자인. 옆면 포켓 디테일. 
    같은 소재 리본 스타일 벨트.
    </div>
</div>
<br/>

<h5 style={BorderTopStyle}>사이즈 선택</h5>
<div style={ Location }><SizeCheck/></div>

</ul>
    
  <CartButton></CartButton>
  <br/>
  <SizeButton></SizeButton> 
  <StockButton></StockButton>
  <DeliveryButton></DeliveryButton>
  
</div>

)

};

export default OrderContainer;
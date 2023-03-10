import React from "react";
import SimpleSlider from "./carousel";
import OrderContainer from "./order/orderContainer";
import styled from "@emotion/styled";
import MenuTabs from "./info/menuTabs";
import LinkMenu from "./info/linkMenu";
import Content from "./info/content";
import { useRef } from "react";

const FlexStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkStyle = styled.div`
  margin-top: 100px;
  padding-left: 50px;
`;

const SliderStyle = styled.div`
  width: 500px;
  height: 800px;
`;

const OrderStyle = styled.div`
  width: 500px;
  height: 800px;
  margin-inline: 200px;
  margin-top: 30px;
`;

function Details() {
  // 메뉴 클릭 시 해당 컴포넌트로 스크롤이 이동하는 기능 구현
  const sizeTableRef = useRef(null);
  const relatedProductRef = useRef(null);

  const handleSizeTabClick = () => {
    sizeTableRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleReletedTabClick = () => {
    relatedProductRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <br />
      <LinkStyle>
        <div>
          <LinkMenu />
        </div>
      </LinkStyle>

      <FlexStyle>
        <SliderStyle>
          <div id="slider">
            <SimpleSlider />
          </div>
        </SliderStyle>
        <OrderStyle>
          <div>
            <OrderContainer />
          </div>
        </OrderStyle>
      </FlexStyle>

      <br />
      <br />
      <MenuTabs onSizeTabClick={handleSizeTabClick} onReletedTabClick={handleReletedTabClick} />
      <div>
        <Content sizeTableRef={sizeTableRef} relatedProductRef={relatedProductRef} />
      </div>
    </div>
  );
}
export default Details;

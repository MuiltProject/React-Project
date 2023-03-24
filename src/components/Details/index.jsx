import React from "react";
import SimpleSlider from "./Carousel";
import OrderContainer from "./Order";
import MenuTabs from "./Content/MenuTabs";
import LinkMenu from "./LinkMenu";
import Content from "./Content";
import { useRef } from 'react';
import * as S from "./index.styled";

function Detail() {
  
  const relatedProductRef = useRef(null);

  const handleReletedTabClick = () => {
    relatedProductRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <br/>
      <S.StyledLink>
        <div>
          <LinkMenu />
        </div>
      </S.StyledLink>
      <S.Container>
        <S.Slider>
          <div>
            <SimpleSlider />
          </div>
        </S.Slider>
        <S.Order>
          <div>
            <OrderContainer />
          </div>
        </S.Order>
      </S.Container>
      <br />
      <br />
      <MenuTabs onReletedTabClick={handleReletedTabClick}/>
      <div>
      <Content relatedProductRef={relatedProductRef}/>
      </div>
    </div>
  );
}

export default Detail;
import React from "react";
import SimpleSlider from "./Carousel";
import OrderContainer from "./Order";
import MenuTabs from "./Content/MenuTabs";
import LinkMenu from "./LinkMenu";
import Content from "./Content";
import { useRef } from 'react';
import * as S from "./index.styled";

function Detail() {
  const sizeTableRef = useRef(null);
  const relatedProductRef = useRef(null);

  const handleSizeTabClick = () => {
    sizeTableRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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
      <MenuTabs onSizeTabClick={handleSizeTabClick} onReletedTabClick={handleReletedTabClick}/>
      <div>
      <Content sizeTableRef={sizeTableRef} relatedProductRef={relatedProductRef}/>
      </div>
      
    </div>
  );
}
export default Detail;

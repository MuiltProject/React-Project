import React, { useState } from 'react';
import * as S from "./index.styled";

    function StockButton() {
        const [show, setShow] = useState(false);
        const handleMouseOver = () => setShow(true);
        const handleMouseOut = () => setShow(false);
      
        return (
          <S.Container>
            <S.Button
              className="btn"
              variant="outline-primary"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              재고 상태
            </S.Button>
            {show && (
              <S.MessageBox>재고가 5개 미만입니다.</S.MessageBox>
            )}
          </S.Container>
        );
      }
      
      export default StockButton;
import React from "react";
import RelatedProduct from "./RelatedProduct";
import * as S from "./index.styled";


function Content({ relatedProductRef }) {
  return (
    <div>
      <S.Info>
      라펠 칼라 트렌치 코트. 어깨와 커프스 부분에 탭이 달린 긴소매 디자인. 옆면 포켓 디테일. 같은 소재 리본 스타일
            벨트.
            </S.Info>
        <br />

      <S.Container ref={relatedProductRef} >
        <S.Related>연관상품</S.Related>
        
          <RelatedProduct />
        
      </S.Container>
    </div>
  );
}

export default Content;

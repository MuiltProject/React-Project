import React from "react";
import coat1 from "../../../assets/Details/coat1.jpg";
import coat4 from "../../../assets/Details/coat4.jpg";
import coat5 from "../../../assets/Details/coat5.jpg";
import coat6 from "../../../assets/Details/coat6.jpg";
import coat7 from "../../../assets/Details/coat7.jpg";
import coat8 from "../../../assets/Details/coat8.jpg";
import RelatedProduct from "./RelatedProduct";
import SizeTable from "./SizeTable";
import * as S from "./index.styled";



function Content({ sizeTableRef, relatedProductRef }) {
  return (
    <div>
      <div>
        <br />

        <S.ImageContainer>
          <S.Text>Outfit View</S.Text>
          <S.ImageWrapper>
            <S.Image src={coat1}  alt="" />
            <S.Image src={coat4}  alt="" />
          </S.ImageWrapper>
        </S.ImageContainer>

        <S.ImageContainer>
          <S.Text>Product View</S.Text>
          <S.ImageWrapper>
            <S.Image src={coat5} alt="" />
            <S.Image src={coat6} alt="" />
          </S.ImageWrapper>
          </S.ImageContainer>

          <S.ImageContainer>
          <S.Text>Detail View</S.Text>
          <S.ImageWrapper>
            <S.Image src={coat7} alt="" />
            <S.Image src={coat8} alt="" />
          </S.ImageWrapper>
          </S.ImageContainer>
    </div>

      <S.Container ref={sizeTableRef}>
        {/* 사이즈 표 */}
        <S.Size>사이즈</S.Size>
        <SizeTable />
      </S.Container>

      <div>{/* 리뷰페이지 */}</div>

      <S.Container ref={relatedProductRef} >
        <S.Related>연관상품</S.Related>
        <S.RelatedBorder>
          <RelatedProduct />
        </S.RelatedBorder>
      </S.Container>
    </div>
  );
}

export default Content;

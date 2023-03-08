import React from "react";
import TextButton from "../Button";
import Carousel from "./Carousel";

import * as S from "./index.styled";
import Pic from "../../assets/Category/women.jpg";

function Category() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>Shop By Category</S.Header>
      </S.Wrapper>
      <S.Wrapper>
        <TextButton category={"Women"} />
        <TextButton category={"Men"} />
        <TextButton category={"Kids"} />
      </S.Wrapper>
      <S.Wrapper>
        <Carousel pic={Pic} category={"Dress"} />
      </S.Wrapper>
    </S.Container>
  );
}
export default Category;

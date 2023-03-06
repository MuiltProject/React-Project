import React from "react";

import * as S from "./index.styled";
import pic1 from "../../assets/Banner/banner.jpg";

function Banner() {
  return (
    <S.Container>
      <S.Banner src={pic1} alt="MenBanner"></S.Banner>
    </S.Container>
  );
}
export default Banner;

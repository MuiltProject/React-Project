import React from "react";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";

import * as S from "./index.styled";
import men from "../../assets/Banner/men.jpg";
import women from "../../assets/Banner/women.jpg";
import kids from "../../assets/Banner/kids.jpg";

function Banner() {
  // TODO: 추후 정해지면 URL 변경 필요
  return (
    <Carousel indicators={false} navButtonsAlwaysVisible={true} animation={"slide"} duration={2000} interval={6000}>
      <Link to="/">
        <S.Banner src={men} alt="Men"></S.Banner>
      </Link>
      <Link to="/">
        <S.Banner src={women} alt="women"></S.Banner>
      </Link>
      <Link to="/">
        <S.Banner src={kids} alt="Kids"></S.Banner>
      </Link>
    </Carousel>
  );
}
export default Banner;

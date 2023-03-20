import React from "react";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";

import * as S from "./index.styled";
import men from "../../assets/Banner/men.jpg";
import women from "../../assets/Banner/women.jpg";
import kids from "../../assets/Banner/kids.jpg";

function Banner() {
  return (
    <Carousel indicators={false} navButtonsAlwaysVisible={true} animation={"slide"} duration={2000} interval={6000}>
      <Link to="/product?target=men">
        <S.Banner src={men} alt="Men"></S.Banner>
      </Link>
      <Link to="/product?target=women">
        <S.Banner src={women} alt="women"></S.Banner>
      </Link>
      <Link to="/product?target=kids">
        <S.Banner src={kids} alt="Kids"></S.Banner>
      </Link>
    </Carousel>
  );
}
export default Banner;

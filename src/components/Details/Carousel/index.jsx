import React from "react";
import { Carousel } from "react-carousel-minimal";
import product1 from "../../../assets/Details/product1.jpg";
import product2 from "../../../assets/Details/product2.jpg";
import product3 from "../../../assets/Details/product3.jpg";
import product4 from "../../../assets/Details/product4.jpg";
import product5 from "../../../assets/Details/product5.jpg";
import product6 from "../../../assets/Details/product6.jpg";
import product7 from "../../../assets/Details/product7.jpg";
import product8 from "../../../assets/Details/product8.jpg";
import * as S from "./index.styled";

function SimpleSlider() {
  const data = [
    {
     image: product1,
    },
    {
      image: product2,
    },
    {
      image: product3,
    },
    {
      image: product4,
    },
    {
      image: product5,
    },
    {
      image: product6,
    },
    {
      image: product7,
    },
    {
      image: product8,
    },
  ];

  return (
        <S.Container>
          <Carousel
            data={data}
            time={2000}
            height="500px"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="50px"
            slideBackgroundColor="#EDE3D7"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="120px"
          />
        </S.Container>
  );
}

export default SimpleSlider;
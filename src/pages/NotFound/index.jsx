import React from "react";
import Image from "../../assets/NotFound/pic.png";

import * as S from "./index.styled";

function NotFound() {
  return (
    <S.Container>
      <S.Spin src={Image} alt="Not Found" />
      {/* <h1>Not Found</h1> */}
    </S.Container>
  );
}
export default NotFound;

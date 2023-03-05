import React from "react";
import * as S from "./index.styled";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <S.Container>
      <S.TextContainer>
        <S.Text>Category</S.Text>
        {/* <S.Text>
          <FontAwesomeIcon icon={faAngleDown} />
        </S.Text> */}
      </S.TextContainer>
      <S.TextContainer>
        <S.Text>Outfit</S.Text>
        {/* <S.Text>
          <FontAwesomeIcon icon={faAngleDown} />
        </S.Text> */}
      </S.TextContainer>
      <S.TextContainer>
        <S.Text>Review</S.Text>
        {/* <S.Text>
          <FontAwesomeIcon icon={faAngleDown} />
        </S.Text> */}
      </S.TextContainer>
    </S.Container>
  );
}
export default Nav;

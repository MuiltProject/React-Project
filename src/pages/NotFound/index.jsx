import React from "react";
import Image from "../../assets/NotFound/pic.png";
import Button from "@mui/material/Button";
import { House, RotateLeft } from "../../assets/FontAwesome";

import * as S from "./index.styled";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  // TODO: 디자인 변경
  return (
    <S.Container>
      <S.Spin src={Image} alt="Not Found" />
      <S.Text>This is not the web page you are looking for</S.Text>
      <S.ButtonContainer>
        <Button variant="text" onClick={goBack} startIcon={<RotateLeft />}>
          <S.ButtonText>Back</S.ButtonText>
        </Button>
      </S.ButtonContainer>
      <S.ButtonContainer>
        <Button variant="text" href="/" startIcon={<House />}>
          <S.ButtonText>Home</S.ButtonText>
        </Button>
      </S.ButtonContainer>
    </S.Container>
  );
}
export default NotFound;

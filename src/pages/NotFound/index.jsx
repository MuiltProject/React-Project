import React from "react";
import Image from "../../assets/NotFound/pic.png";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import * as S from "./index.styled";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <S.Container>
      <S.Spin src={Image} alt="Not Found" />
      <S.Text>404 Not Found</S.Text>
      <S.ButtonContainer>
        <Button variant="text" onClick={goBack} startIcon={<FontAwesomeIcon icon={faRotateLeft} />}>
          <S.ButtonText>Back</S.ButtonText>
        </Button>
      </S.ButtonContainer>
      <S.ButtonContainer>
        <Button variant="text" href="/" startIcon={<FontAwesomeIcon icon={faHouse} />}>
          <S.ButtonText>Home</S.ButtonText>
        </Button>
      </S.ButtonContainer>
    </S.Container>
  );
}
export default NotFound;

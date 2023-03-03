import React from "react";
import Image from "../../assets/NotFound/pic.png";
import Button from "@mui/material/Button";

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
      <S.Text>Not Found</S.Text>
      <Button variant="contained" href="/">
        Home
      </Button>
      <Button variant="contained" onClick={goBack}>
        Back
      </Button>
    </S.Container>
  );
}
export default NotFound;

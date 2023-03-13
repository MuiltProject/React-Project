import React, { useState } from "react";

import { TextField, Button } from "@mui/material";

import * as S from "./index.styled";

function Form() {
  // TODO: 검증하고 데이터를 넘기는 ...
  const [recipient, setRecipient] = useState({});
  const [zipCode, setZicCode] = useState({});
  const [address, setAddress] = useState({});

  const getNowPassword = (e) => {
    setRecipient(e.target.value);
    console.log(recipient);
  };

  const getNewPassword = (e) => {
    setZicCode(e.target.value);
    console.log(zipCode);
  };

  const getValidatePassword = (e) => {
    setAddress(e.target.value);
    console.log(address);
  };

  return (
    <S.Container>
      <S.StyledForm>
        <TextField id="recipient" onChange={getNowPassword} label="수취인 변경" variant="standard" />
        <TextField id="zipCode" onChange={getNewPassword} label="우편번호 변경" variant="standard" />
        <TextField id="address" onChange={getValidatePassword} label="주소 변경" variant="standard" />
      </S.StyledForm>
      <Button variant="outlined">변경</Button>
    </S.Container>
  );
}

export default Form;

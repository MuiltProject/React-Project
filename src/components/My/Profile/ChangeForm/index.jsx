import React, { useState } from "react";

import { TextField, Button } from "@mui/material";

import * as S from "./index.styled";

function PasswordForm() {
  // TODO: 검증하고 데이터를 넘기는 ...
  const [nowPassword, setNowPassword] = useState({});
  const [newPassword, setNewPassword] = useState({});
  const [validatePassword, setValidatePassword] = useState({});

  const getNowPassword = (e) => {
    setNowPassword(e.target.value);
    console.log(nowPassword);
  };

  const getNewPassword = (e) => {
    setNewPassword(e.target.value);
    console.log(newPassword);
  };

  const getValidatePassword = (e) => {
    setValidatePassword(e.target.value);
    console.log(validatePassword);
  };

  return (
    <S.Container>
      <S.StyledForm>
        <TextField
          type={"password"}
          id="standard-basic"
          onChange={getNowPassword}
          label="현재 비밀번호"
          variant="standard"
        />
        <TextField
          type={"password"}
          id="standard-basic"
          onChange={getNewPassword}
          label="새 비밀번호"
          variant="standard"
        />
        <TextField
          type={"password"}
          id="standard-basic"
          onChange={getValidatePassword}
          label="새 비밀번호 재입력"
          variant="standard"
        />
      </S.StyledForm>
      <Button variant="outlined">변경</Button>
    </S.Container>
  );
}

function EmailForm() {
  return (
    <S.Container>
      <S.StyledForm>
        <TextField type={"email"} id="standard-basic" label="새 이메일" variant="standard" />
      </S.StyledForm>
      <Button variant="outlined">변경</Button>
    </S.Container>
  );
}

function PhoneNumberForm() {
  return (
    <S.Container>
      <S.StyledForm>
        <TextField type={"tel"} id="standard-basic" label="변경할 전화번호" variant="standard" />
      </S.StyledForm>
      <Button variant="outlined">변경</Button>
    </S.Container>
  );
}
export { PasswordForm, EmailForm, PhoneNumberForm };

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
          id="nowPassword"
          onChange={getNowPassword}
          label="현재 비밀번호"
          variant="standard"
        />
        <TextField
          type={"password"}
          id="newPassword"
          onChange={getNewPassword}
          label="새 비밀번호"
          variant="standard"
        />
        <TextField
          type={"password"}
          id="validatePassword"
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
  const [email, setEmail] = useState({});

  const getEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  return (
    <S.Container>
      <S.StyledForm>
        <TextField type={"email"} id="email" onChange={getEmail} label="새 이메일" variant="standard" />
      </S.StyledForm>
      <Button variant="outlined">변경</Button>
    </S.Container>
  );
}

function PhoneNumberForm() {
  const [phoneNumber, setPhoneNumber] = useState({});

  const getPhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    console.log(phoneNumber);
  };

  return (
    <S.Container>
      <S.StyledForm>
        <TextField type={"tel"} id="phoneNumber" onChange={getPhoneNumber} label="변경할 전화번호" variant="standard" />
      </S.StyledForm>
      <Button variant="outlined">변경</Button>
    </S.Container>
  );
}
export { PasswordForm, EmailForm, PhoneNumberForm };

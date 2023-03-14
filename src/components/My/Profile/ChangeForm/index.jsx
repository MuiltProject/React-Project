import React, { useState } from "react";

import { TextField, Button } from "@mui/material";

import * as S from "./index.styled";
import axios from "axios";

function PasswordForm() {
  const [nowPassword, setNowPassword] = useState({});
  const [newPassword, setNewPassword] = useState({});
  const [validatePassword, setValidatePassword] = useState({});

  const getNowPassword = (e) => {
    setNowPassword(e.target.value);
    // console.log(nowPassword);
  };

  const getNewPassword = (e) => {
    setNewPassword(e.target.value);
    // console.log(newPassword);
  };

  const getValidatePassword = (e) => {
    setValidatePassword(e.target.value);
    // console.log(validatePassword);
  };

  // https://velog.io/@shin6403/React-Form-Data-%EC%A0%84%EC%86%A1
  // https://velog.io/@zofqofhtltm8015/Axios-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%84%9C%EB%B2%84-%ED%86%B5%EC%8B%A0-%ED%95%B4%EB%B3%B4%EA%B8%B0
  const changePassword = async () => {
    const formData = new FormData();
    // formData.append("now_password", nowPassword);
    // formData.append("new_password", newPassword);
    // TODO: password로 변경하기
    formData.append("email", nowPassword);
    formData.append("pw", newPassword);

    await axios({
      method: "POST",
      url: `https://reqres.in/api/users`,
      mode: "cors",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((result) => {
        console.log("성공");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <S.Container>
      <S.StyledForm>
        <TextField
          // type={"password"}
          id="nowPassword"
          onChange={getNowPassword}
          label="현재 비밀번호"
          variant="standard"
        />
        <TextField
          // type={"password"}
          id="newPassword"
          onChange={getNewPassword}
          label="새 비밀번호"
          variant="standard"
        />
        <TextField
          // type={"password"}
          id="validatePassword"
          onChange={getValidatePassword}
          label="새 비밀번호 재입력"
          variant="standard"
        />
        {newPassword !== validatePassword && <S.Warning>비밀번호가 동일하지 않습니다.</S.Warning>}
      </S.StyledForm>
      {newPassword === validatePassword ? (
        <Button variant="outlined" onClick={changePassword}>
          변경
        </Button>
      ) : (
        <Button disabled variant="outlined">
          변경
        </Button>
      )}
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

import React, { useState } from "react";
import axios from "axios";

import { TextField, Button } from "@mui/material";
import * as S from "./index.styled";

import { API_PATH } from "../../../../constants/path";
import { EMAIL_REGEX, PHONE_NUMBER_REGEX } from "../../../../utils/validate";
import { MEMBER_RULE } from "../../../../constants/rule";
import { CLIENT_ERROR_MESSAGE } from "../../../../constants/message";

function PasswordForm() {
  const [nowPassword, setNowPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState("");

  const getNowPassword = (e) => {
    setNowPassword(e.target.value);
  };

  const getNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const getValidatePassword = (e) => {
    setValidatePassword(e.target.value);
  };

  const hasNowPassword = () => {
    return nowPassword !== "";
  };

  const hasNewPassword = () => {
    return newPassword !== "";
  };

  const validatePasswordByLength = (password) => {
    return MEMBER_RULE.PASSWORD.MIN_LENGTH <= password.length && password.length <= MEMBER_RULE.PASSWORD.MAX_LENGTH;
  };

  const equalsNewPassword = () => {
    return newPassword === validatePassword;
  };

  const changePassword = async () => {
    const formData = new FormData();
    // formData.append("now_password", nowPassword);
    // formData.append("new_password", newPassword);
    // TODO: password로 변경하기
    formData.append("email", nowPassword);
    formData.append("pw", newPassword);

    await axios({
      method: "POST",
      url: API_PATH.MY.CHANGE.PASSWORD, // TODO: 백엔드 서버로 교체
      mode: "cors",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <S.Container>
      <S.StyledForm>
        <TextField
          type={"password"}
          id="nowPassword"
          onChange={getNowPassword}
          label="현재 비밀번호"
          inputProps={{ maxLength: MEMBER_RULE.PASSWORD.MAX_LENGTH }}
          variant="standard"
        />
        {!validatePasswordByLength(nowPassword) && <S.Warning>{CLIENT_ERROR_MESSAGE.INVALID_PASSWORD}</S.Warning>}
        <TextField
          type={"password"}
          id="newPassword"
          onChange={getNewPassword}
          label="새 비밀번호"
          inputProps={{ maxLength: MEMBER_RULE.PASSWORD.MAX_LENGTH }}
          variant="standard"
        />
        {!validatePasswordByLength(newPassword) && <S.Warning>{CLIENT_ERROR_MESSAGE.INVALID_PASSWORD}</S.Warning>}
        <TextField
          type={"password"}
          id="validatePassword"
          onChange={getValidatePassword}
          label="새 비밀번호 재입력"
          inputProps={{ maxLength: MEMBER_RULE.PASSWORD.MAX_LENGTH }}
          variant="standard"
        />
        {!equalsNewPassword() && <S.Warning>{CLIENT_ERROR_MESSAGE.CHANGE.INVALID_CONFIRM_PASSWORD}</S.Warning>}
      </S.StyledForm>
      {equalsNewPassword() &&
      hasNowPassword() &&
      hasNewPassword() &&
      validatePasswordByLength(nowPassword) &&
      validatePasswordByLength(newPassword) ? (
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
  const [email, setEmail] = useState("");

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  const hasEmail = () => {
    return email !== "";
  };

  const validateEmail = () => {
    return EMAIL_REGEX.test(email);
  };

  const changeEmail = async () => {
    const formData = new FormData();

    formData.append("email", email);

    await axios({
      method: "POST",
      url: API_PATH.MY.CHANGE.EMAIL, // TODO: 백엔드 서버로 교체
      mode: "cors",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((result) => {
        formData.forEach((value, key) => console.log("key : " + key + ", value : " + value));
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <S.Container>
      <S.StyledForm>
        <TextField type={"email"} id="email" onChange={getEmail} label="새 이메일" variant="standard" />
        {!validateEmail() && <S.Warning>{CLIENT_ERROR_MESSAGE.INVALID_EMAIL}</S.Warning>}
      </S.StyledForm>
      {hasEmail() && validateEmail() ? (
        <Button variant="outlined" onClick={changeEmail}>
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

function PhoneNumberForm({ nowPhoneNumber }) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const getPhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    console.log(phoneNumber);
  };

  const hasPhoneNumber = () => {
    return phoneNumber !== "";
  };

  const validatePhoneNumber = () => {
    return PHONE_NUMBER_REGEX.test(phoneNumber);
  };

  const validatePhoneNumberByLength = () => {
    return (
      MEMBER_RULE.PHONE_NUMBER.MIN_LENGTH <= phoneNumber.length &&
      phoneNumber.length <= MEMBER_RULE.PHONE_NUMBER.MAX_LENGTH
    );
  };

  const changePhoneNumber = async () => {
    const formData = new FormData();

    formData.append("phone_number", phoneNumber);

    await axios({
      method: "POST",
      url: API_PATH.MY.CHANGE.PHONE_NUMBER, // TODO: 백엔드 서버로 교체
      mode: "cors",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((result) => {
        formData.forEach((value, key) => console.log("key : " + key + ", value : " + value)); // 데이터 확인용
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <S.Container>
      <S.StyledForm>
        <TextField
          type={"tel"}
          id="phoneNumber"
          onChange={getPhoneNumber}
          label="변경할 전화번호"
          placeholder={nowPhoneNumber}
          variant="standard"
          inputProps={{ maxLength: MEMBER_RULE.PHONE_NUMBER.MAX_LENGTH }}
        />
        {!validatePhoneNumber() && hasPhoneNumber() && (
          <S.Warning>{CLIENT_ERROR_MESSAGE.INVALID_PHONE_NUMBER.BASE}</S.Warning>
        )}
        {!validatePhoneNumberByLength() && <S.Warning>{CLIENT_ERROR_MESSAGE.INVALID_PHONE_NUMBER.LENGTH}</S.Warning>}
      </S.StyledForm>
      {hasPhoneNumber() && validatePhoneNumber() ? (
        <Button variant="outlined" onClick={changePhoneNumber}>
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
export { PasswordForm, EmailForm, PhoneNumberForm };

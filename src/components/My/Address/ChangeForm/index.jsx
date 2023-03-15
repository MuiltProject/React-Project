import React, { useState } from "react";
import axios from "axios";

import { TextField, Button } from "@mui/material";
import * as S from "./index.styled";

import { API_PATH } from "../../../../constants/path";

function Form() {
  const [recipient, setRecipient] = useState("");
  const [zipCode, setZicCode] = useState("");
  const [address, setAddress] = useState("");

  const getRecipient = (e) => {
    setRecipient(e.target.value);
  };

  const getZipCode = (e) => {
    setZicCode(e.target.value);
  };

  const getAddress = (e) => {
    setAddress(e.target.value);
  };

  const hasRecipient = () => {
    return recipient !== "";
  };

  const hasZicCode = () => {
    return zipCode !== "";
  };

  const hasAddress = () => {
    return address !== "";
  };

  const changeAddress = async () => {
    const formData = new FormData();

    if (hasRecipient()) {
      formData.append("recipient", recipient);
    }
    if (hasZicCode()) {
      formData.append("zip_code", zipCode);
    }
    if (hasAddress()) {
      formData.append("address", address);
    }

    await axios({
      method: "POST",
      url: API_PATH.MY.CHANGE_ADDRESS, // TODO: 백엔드 서버로 교체
      mode: "cors",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((result) => {
        // formData.forEach((key, value) => console.log(key + "+" + value)); // formData 확인용
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <S.Container>
      <S.StyledForm>
        <TextField id="recipient" onChange={getRecipient} label="수취인 변경" variant="standard" />
        <TextField id="zipCode" onChange={getZipCode} label="우편번호 변경" variant="standard" />
        <TextField id="address" onChange={getAddress} label="주소 변경" variant="standard" />
      </S.StyledForm>
      {hasAddress() || hasRecipient() || hasZicCode() ? (
        <Button variant="outlined" onClick={changeAddress}>
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

export default Form;

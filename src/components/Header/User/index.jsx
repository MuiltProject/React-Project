import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import * as S from "./index.styled";

import Json from "../../../data/Header/data.json";

// isLogin : Boolean
function User({ isLogin }) {
  isLogin = true;

  const [data, setData] = useState("");

  // TODO: 추후 API SERVER의 URL로 변경
  const getData = useCallback(async () => {
    await axios
      .get(`http://localhost:4000/header`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(data);

  useEffect(() => {
    getData();
  }, [getData]);

  if (isLogin) {
    return (
      <S.Container>
        <S.StyledLink to={"/cart"}>
          Cart
          <S.Wrapper>
            {/* TODO: 추후 배열형태가 아닌 객체 형태로 들어오므로 수정 필요 */}
            {/* <span>{data[0].cartCount}</span> */}
            <span>{Json.cart_count}</span>
          </S.Wrapper>
        </S.StyledLink>
        <S.StyledLink to={"/my"}>MyPage</S.StyledLink>
      </S.Container>
    );
  }
  return (
    <S.Container>
      <S.StyledLink to={"/login"}>Cart</S.StyledLink>
      <S.StyledLink to={"/login"}>MyPage</S.StyledLink>
    </S.Container>
  );
}
export default User;

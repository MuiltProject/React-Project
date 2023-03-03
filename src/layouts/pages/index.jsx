import React from "react";

import Header from "../../components/Header";
import * as S from "./index.styled";

function Page({ children }) {
  return (
    <S.PageContainer>
      <Header />
      <S.Content>{children}</S.Content>
    </S.PageContainer>
  );
}
export default Page;

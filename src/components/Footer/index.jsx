import React from "react";
import * as S from "./index.styled";

function Footer() {
  return (
    <S.Container>
      <S.Content>
        <h1>Shop</h1>
        <S.Text>COPYRIGHT (C) Project ALL RIGHTS RESERVED.</S.Text>
      </S.Content>
      <S.Content>
        <h2>SHOP</h2>
        <S.Text>
          <S.StyledLink to="/">For Women</S.StyledLink>
        </S.Text>
        <S.Text>
          <S.StyledLink to="/">For Men</S.StyledLink>
        </S.Text>
        <S.Text>
          <S.StyledLink to="/">For Kids</S.StyledLink>
        </S.Text>
      </S.Content>
      <S.Content>
        <h2>Company</h2>
        <S.Text>
          <S.StyledLink to="/login">Login</S.StyledLink>
        </S.Text>
        <S.Text>
          <S.StyledLink to="/join">Join</S.StyledLink>
        </S.Text>
        <S.Text>
          <S.StyledLink to="/cart">Cart</S.StyledLink>
        </S.Text>
      </S.Content>
      <S.Content>
        <h2>SUPPORT & CONTACT</h2>
        <S.Text>FAQs</S.Text>
        <S.Text>Size Guide</S.Text>
        <S.Text>02-1234-5678</S.Text>
        <S.Text>help@project.com</S.Text>
      </S.Content>
    </S.Container>
  );
}
export default Footer;

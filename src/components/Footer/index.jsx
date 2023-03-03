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
          <S.Link>For Women</S.Link>
        </S.Text>
        <S.Text>
          <S.Link>For Mem</S.Link>
        </S.Text>
        <S.Text>
          <S.Link>For Kids</S.Link>
        </S.Text>
      </S.Content>
      <S.Content>
        <h2>Company</h2>
        <S.Text>
          <S.Link>Login</S.Link>
        </S.Text>
        <S.Text>
          <S.Link>Register</S.Link>
        </S.Text>
        <S.Text>
          <S.Link>Wishlist</S.Link>
        </S.Text>
      </S.Content>
      <S.Content>
        <h2>SUPPORT & CONTACT</h2>
        <S.Text>
          <S.Link>FAQs</S.Link>
        </S.Text>
        <S.Text>
          <S.Link>Size Guide</S.Link>
        </S.Text>
        <S.Text>02-1234-5678</S.Text>
        <S.Text>help@project.com</S.Text>
      </S.Content>
    </S.Container>
  );
}
export default Footer;

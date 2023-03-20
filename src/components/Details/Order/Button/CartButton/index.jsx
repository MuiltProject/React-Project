import React from 'react';
import { Link } from "react-router-dom";
import * as S from "./index.styled";

function CartButton() {
  return (
    <div className="cartButton">
     
      <Link to="/cart">
        <S.Button>장바구니 담기</S.Button>
      </Link>
    </div>
  );
}

export default CartButton;
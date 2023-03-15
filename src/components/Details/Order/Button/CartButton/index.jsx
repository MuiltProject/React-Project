//import Button from 'react-bootstrap/Button';
import styled from "@emotion/styled";
import SimpleSlider from "../../../Carousel/";
import * as S from "./index.styled";


function CartButton() {
  return (
    <div className="cartButton">
      {/* TODO:  Link 변경*/}
      <a href="https://react.school" target="_blank" rel="noreferrer">
        <S.Button onClick={SimpleSlider}>장바구니</S.Button>
      </a>
    </div>
  );
}

export default CartButton;

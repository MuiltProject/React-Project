//import Button from 'react-bootstrap/Button';
import styled from "@emotion/styled";
import SimpleSlider from "../carousel";

const Button = styled.button`
  background-color: #0f010d;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  width: 90%;
  margin: 10px 40px;
  cursor: pointer;
`;

function CartButton() {
  return (
    <div className="cartButton">
      {/* TODO:  Link로 변경*/}
      <a href="https://react.school" target="_blank" rel="noreferrer">
        <Button onClick={SimpleSlider}>장바구니</Button>;
      </a>
    </div>
  );
}

export default CartButton;

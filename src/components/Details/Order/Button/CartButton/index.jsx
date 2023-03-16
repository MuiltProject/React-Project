import { Link } from "react-router-dom";
import * as S from "./index.styled";


function CartButton() {
  return (
    <div className="cartButton">
     
      <Link to="/cart">
        <S.Button>장바구니</S.Button>
      </Link>
    </div>
  );
}

export default CartButton;

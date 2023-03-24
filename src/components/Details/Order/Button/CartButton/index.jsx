import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import * as S from "./index.styled";

function CartButton() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
      <div>
          <S.Button  variant="outline-primary" onClick={handleShow}>장바구니 담기</S.Button>
          <Modal show={show} onHide={handleClose} >
              <Modal.Header>
                  <Modal.Title>Message</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <S.MessageContainer>장바구니에 상품이 담겼습니다.</S.MessageContainer>
                  </Modal.Body>
              <Modal.Footer>
              <S.ButtonContainer>
                  <S.CloseButton className="btn_close" variant="secondary" onClick={handleClose}>
                      쇼핑 계속하기
                  </S.CloseButton>
                  <S.StyledLink to="/cart"><S.ToCartButton className="cart" variant="third" onClick={handleClose}>
                      장바구니로 이동
                  </S.ToCartButton>
                   </S.StyledLink>
                  </S.ButtonContainer>
              </Modal.Footer>
          </Modal>
      </div>
  )
}

export default CartButton;
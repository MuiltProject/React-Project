import React, { useState, useRef } from 'react';
import styled from "@emotion/styled";
import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import 'bootstrap/dist/css/bootstrap.min.css';

// const Button = styled.button`
//   background-color: white;
//   color: black;
//   font-size: 15px;
//   padding: 10px;
//   margin: 0 20px;
//   cursor: pointer;
//   border: none;
// `;

const ButtonStyle = {
  backgroundColor: "white",
  color: "black",
  fontSize: "15px",
  padding: "10px",
  margin: "0 23px",
  cursor: "pointer",
  border: "none"
};
const TextStyle = {
  
  fontSize: "11px"
};  

function DeliveryButton() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick} style={ButtonStyle}>배송 방법</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
        
      >
        <Popover id="popover-contained">
            {/* <Popover.Header as="h4">배송 방법</Popover.Header> */}
                 <Popover.Body style={TextStyle}>
                   <strong>택배배송</strong><br/> 무료배송 / 18시 이전 주문 시 오늘 출고 예정<br/>
                  <strong>매장픽업</strong><br/> 온라인 구매 후 지정 매장에서 수령
                </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}
export default DeliveryButton;

//   const Button = styled.button`
//   background-color: white;
//   color: black;
//   font-size: 15px;
//   padding: 10px;
  
//   margin: 0 20px;
//   cursor: pointer;
// `;
// const CloseButton = styled.button`
//   background-color: #E5CDCE;
//   color: white;
//   font-size: 20px;
//   padding: 10px 60px;
//   border-style: none;
//   margin: 10px 40px;
//   cursor: pointer;
// `;
// function DeliveryButton() {

//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return(
//         <div>
//             <Button className="btn" variant="outline-primary" onClick={handleShow}>배송 방법</Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header>
//                     <Modal.Title>배송 방법</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body><div>
//       <ul style={ ListStyle }>택배배송
//         <li style={ ListStyle } >무료배송 / 18시 이전 주문 시 오늘 출고 예정</li>
//       </ul>
//       <ul style={ ListStyle }>매장픽업
//         <li style={ ListStyle }>온라인 구매 후 지정 매장에서 수령</li>
//       </ul>
//     </div></Modal.Body>
//                 <Modal.Footer>
//                     <CloseButton className="btn_close" variant="secondary" onClick={handleClose}>
//                         닫기
//                     </CloseButton>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     )
// }
// export default DeliveryButton;


//import './MyButton.css';

// function DeliveryButton() {

//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return(
//         <div>
//             <Button className="btn" variant="outline-primary" onClick={handleShow}>배송 기간</Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header>
//                     <Modal.Title>배송 기간</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>데이터</Modal.Body>
//                 <Modal.Footer>
//                     <Button className="btn_close" variant="secondary" onClick={handleClose}>
//                         닫기
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     )
// }
// export default DeliveryButton;
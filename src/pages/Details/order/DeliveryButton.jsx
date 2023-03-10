import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import 'bootstrap/dist/css/bootstrap.min.css';

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
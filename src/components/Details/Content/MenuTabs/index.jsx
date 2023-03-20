import React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import * as S from "./index.styled";

function MenuTabs({ onReletedTabClick }) {
  
  const handleReletedTabClick = (event) => {
    event.preventDefault();
    onReletedTabClick();
  };

  return (
    <Tab.Container id="tabs" defaultActiveKey="Content">
      <Nav justify variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="RelatedProducts" onClick={handleReletedTabClick}> 
            <S.Text>연관상품</S.Text>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Tab.Container>
  );
}

export default MenuTabs;
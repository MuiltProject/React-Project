import React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import * as S from "./index.styled";

function MenuTabs({ onSizeTabClick, onReletedTabClick }) {
  
  const handleSizeTabClick = (event) => {
    event.preventDefault();
    onSizeTabClick();
  };

  const handleReletedTabClick = (event) => {
    event.preventDefault();
    onReletedTabClick();
  };

  return (
    <Tab.Container id="tabs" defaultActiveKey="Content">
      <Nav justify variant="tabs">
        <Nav.Item>
          <S.StyledNavLink eventKey="Content">
            상세정보
          </S.StyledNavLink>
        </Nav.Item>
        <Nav.Item>
          <S.StyledNavLink eventKey="Size" onClick={handleSizeTabClick}>
            사이즈
          </S.StyledNavLink>
        </Nav.Item>
        <Nav.Item>
          <S.StyledNavLink eventKey="RelatedProducts" onClick={handleReletedTabClick}>
            연관상품
          </S.StyledNavLink>
        </Nav.Item>
      </Nav>

    </Tab.Container>
  );
}

export default MenuTabs;



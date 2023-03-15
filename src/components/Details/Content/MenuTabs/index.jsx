import React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import {StyledLink} from "./index.styled";

function MenuTabs({ onReletedTabClick }) {
  
  const handleReletedTabClick = (event) => {
    event.preventDefault();
    onReletedTabClick();
  };

  return (
    <Tab.Container id="tabs" defaultActiveKey="Content">
      <Nav justify variant="tabs">
        <Nav.Item>
          <Nav.Link style={StyledLink}>
            상세정보
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="RelatedProducts" onClick={handleReletedTabClick} style={StyledLink}>
            연관상품
          </Nav.Link>
        </Nav.Item>
      </Nav>

    </Tab.Container>
  );
}

export default MenuTabs;



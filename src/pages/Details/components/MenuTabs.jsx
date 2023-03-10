import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Content from "./Content";
import RelatedProduct from "./RelatedProduct";
import ShippingInfo from "./ShippingInfo";
import SizeTable from "./SizeTable";

import React, { useState } from "react";



function MenuTabs({ onSizeTabClick, onReletedTabClick}) {

  const MenuStyle = { 
    color: '#807675', 
    fontSize: "24px"
  };

  

  //const [activeTab, setActiveTab] = useState('Content');

  const handleSizeTabClick = (event) => {
    event.preventDefault();
   //setActiveTab('Content');
    onSizeTabClick();
  };

  const handleReletedTabClick = (event) => {
    event.preventDefault();
   //setActiveTab('RelatedProducts');
    onReletedTabClick();
  };

  return (
    <Tab.Container id="tabs" defaultActiveKey="Content">
      <Nav justify variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="Content" style={ MenuStyle }>상세정보</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Size" onClick={handleSizeTabClick} style={ MenuStyle }>
            사이즈
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="RelatedProducts" onClick={handleReletedTabClick} style={ MenuStyle }>
            연관상품
          </Nav.Link>
        </Nav.Item>
      </Nav>
      
      {/* <Tab.Content>
        <Tab.Pane eventKey="Content">
          <Content />
        </Tab.Pane>
        <Tab.Pane eventKey="Size">
          <Content />
        </Tab.Pane>
        <Tab.Pane eventKey="RelatedProducts">
          <Content />
        </Tab.Pane>
        
      </Tab.Content> */}
    </Tab.Container>
  );
}

export default MenuTabs;





// function MenuTabs({ onSizeTabClick, onReletedTabClick}) {

//   const MenuStyle = { 
//     color: '#807675' 
//   };
//   const [activeTab, setActiveTab] = useState('Content');

//   const handleSizeTabClick = (event) => {
//     event.preventDefault();
//     //setActiveTab('Content');
//     onSizeTabClick();
//   };

//   const handleReletedTabClick = (event) => {
//     event.preventDefault();
//     //setActiveTab('Content');
//     onReletedTabClick();
//   };

//   const handleShippingTabClick = (event) => {
//     event.preventDefault();
//     setActiveTab('ShippingInfo');
//   };

//   return (
//     <Tab.Container id="tabs" defaultActiveKey="Content">
//     <Nav justify variant="tabs">
//       <Nav.Item >
//         <Nav.Link eventKey="Content" style={ MenuStyle }>상세정보</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="Size" onClick={handleSizeTabClick} style={ MenuStyle }>
//           사이즈
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="Reviews" style={ MenuStyle }>상품후기</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="RelatedProducts" onClick={handleReletedTabClick} style={ MenuStyle }>연관상품</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="ShippingInfo" onClick={handleShippingTabClick} style={ MenuStyle }>배송/교환/반품</Nav.Link>
//       </Nav.Item>
//     </Nav>
    
//     <Tab.Content>
//       <Tab.Pane eventKey="Content">
//         <Content />
//       </Tab.Pane>
//       <Tab.Pane eventKey="Size">
//       <Content />
//       </Tab.Pane>
//       {/* <Tab.Pane eventKey="Reviews">
//         <Reviews />
//       </Tab.Pane> */}
//       <Tab.Pane eventKey="RelatedProducts">
//         <Content />
//       </Tab.Pane>
//       <Tab.Pane eventKey="ShippingInfo">
//         <ShippingInfo />
//       </Tab.Pane>
//     </Tab.Content>

    
//     </Tab.Container>
//   );
// }

// export default MenuTabs;

// function MenuTabs({ onSizeTabClick, onReletedTabClick}) {

//   const MenuStyle = { 
//     color: '#807675' 
//   };

//   const handleSizeTabClick = (event) => {
//     event.preventDefault();
//     onSizeTabClick();
//   };

//   const handleReletedTabClick = (event) => {
//     event.preventDefault();
//     onReletedTabClick();
//   };

//   return (
//     <Tab.Container id="tabs" defaultActiveKey="Content">
//     <Nav justify variant="tabs">
//       <Nav.Item >
//         <Nav.Link eventKey="Content" style={ MenuStyle }>상세정보</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link href="/size" onClick={handleSizeTabClick} style={ MenuStyle }>
//           사이즈
//         </Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="/reviews" style={ MenuStyle }>상품후기</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="/related-products" onClick={handleReletedTabClick} style={ MenuStyle }>연관상품</Nav.Link>
//       </Nav.Item>
//       <Nav.Item>
//         <Nav.Link eventKey="ShippingInfo" style={ MenuStyle }>배송/교환/반품</Nav.Link>
//       </Nav.Item>
//     </Nav>
    
//     <Tab.Content>
//       <Tab.Pane eventKey="Content">
//         <Content />
//       </Tab.Pane>
//       {/* <Tab.Pane eventKey="/size">
//         <Size />
//       </Tab.Pane>
//       <Tab.Pane eventKey="/reviews">
//         <Reviews />
//       </Tab.Pane> */}
//       {/* <Tab.Pane eventKey="/related-products">
//         <RelatedProducts />
//       </Tab.Pane> */}
//       <Tab.Pane eventKey="ShippingInfo">
//         <ShippingInfo />
//       </Tab.Pane>
//     </Tab.Content>

    
//     </Tab.Container>
//   );
// }

// export default MenuTabs;



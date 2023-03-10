import React from "react";
import SimpleSlider from "./components/carousel/SimpleSlider";
import OrderContainer from "./components/ordercontainer/OrderContainer";
import styled from "@emotion/styled";
import MenuTabs from "./components/info/MenuTabs";
import LinkMenu from "./components/LinkMenu";
import Content from "./components/info/Content";
import { useRef } from 'react';


const FlexStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkStyle = styled.div`

  margin-top: 100px;
  padding-left: 50px;
`;

const Slider = styled.div`
  width: 500px;
  height: 800px;
`;

const OrderStyle = styled.div`
  width: 500px;
  height: 800px;
  margin-inline: 200px;
  margin-top: 30px;
`;

function Details() {
  const sizeTableRef = useRef(null);
  const relatedProductRef = useRef(null);

  const handleSizeTabClick = () => {
    sizeTableRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleReletedTabClick = () => {
    relatedProductRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (

    <div>
     
<br/>
      <LinkStyle>
        <div>
          <LinkMenu />
        </div>
      </LinkStyle>

      <FlexStyle>
        <Slider>
          <div id="slider">
            <SimpleSlider />
          </div>
        </Slider>
        <OrderStyle>
          <div>
            <OrderContainer />
          </div>
        </OrderStyle>
      </FlexStyle>
      
      <br />
      <br />
      <MenuTabs onSizeTabClick={handleSizeTabClick} onReletedTabClick={handleReletedTabClick}/>
      <div>
        <Content sizeTableRef={sizeTableRef} relatedProductRef={relatedProductRef}/>
      </div>
      
    </div>
  );
}
export default Details;

// function Container() {
//   const sizeTableRef = useRef(null);
//   

//   const handleSizeTabClick = () => {
//     sizeTableRef.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (

//     <div>
//       <Header></Header>
// <br/>
//       <LinkStyle>
//         <div>
//           <LinkMenu />
//         </div>
//       </LinkStyle>

//       <FlexStyle>
//         <Slider>
//           <div id="slider">
//             <SimpleSlider />
//           </div>
//         </Slider>
//         <OrderStyle>
//           <div>
//             <OrderContainer />
//           </div>
//         </OrderStyle>
//       </FlexStyle>
      
//       <br />
//       <br />
//       <MenuTabs onSizeTabClick={handleSizeTabClick} />
//       <div>
//         <Content sizeTableRef={sizeTableRef} />
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// }
// export default Container;
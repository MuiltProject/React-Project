import React, { useRef } from "react";

import SimpleSlider from ".././carousel/SimpleSlider";
import OrderContainer from ".././ordercontainer/OrderContainer";
import styled from "@emotion/styled";
import MenuTabs from "./MenuTabs";
import LinkMenu from "../LinkMenu";
import coat1 from '../../images/coat1.jpg';
import coat2 from '../../images/coat2.jpg';
import coat3 from '../../images/coat3.jpg';
import coat4 from '../../images/coat4.jpg';
import coat5 from '../../images/coat5.jpg';
import coat6 from '../../images/coat6.jpg';
import coat7 from '../../images/coat7.jpg';
import coat8 from '../../images/coat8.jpg';
import RelatedProduct from "./RelatedProduct";
import MaterialTable from "./MaterialTable";
import SizeTable from "./SizeTable";


// const FlexStyle = styled.div`
  
//   margin: 0 auto;
// `;

const FlexStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "80px"
  };

  const ImageStyle = {
     width: "500px",
    height: "600px",
    margin: "30px"
  }

  const ImageContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "200px"
  };
  
  const ImageWrapper = {
    display: "flex",
    justifyContent: "center",
  };

  const TextStyle = {
    position: "relative", 
  left: "-430px", 
  top: 0, 
   
  };

  const RelatedStyle = {
    position: "relative", 
  left: "-430px", 
  top: 0,
  paddingBottom: '20px'
  };

  const SizeStyle = {
    
  paddingBottom: '20px'
  };

  const RelatedBorderStyle = {
  borderTopColor: '#807675',
  borderTopWidth: '2px',
  borderTopStyle: 'solid',
  paddingTop: '30px'
  };

  
function Content({ sizeTableRef, relatedProductRef }) {
    return (
      <div>

        <div id="information">
        <br/>
        {/* <div style={FlexStyle}>
        <br/>
        소재 정보<br/>
        겉감<br/>
        면 60%,  폴리에스터 29%, 폴리아미드 11%
        </div>
        

        <div style={FlexStyle}>
            <MaterialTable/>
        </div>
 */}

        <div style={ImageContainer}>
        <h3 style={TextStyle}>Outfit View</h3>
        <div style={ImageWrapper}>
            <img src={coat1} style={ImageStyle} />
    <img src={coat4} style={ImageStyle}/>
    </div>
    </div>
   

        
    <div style={ImageContainer}>
    <h3 style={TextStyle}>Product View</h3>
    <div style={ImageWrapper}>
            <img src={ coat5} style={ImageStyle} />
    <img src={ coat6} style={ImageStyle} />
    </div>
    </div>
    

       
        <div style={ImageContainer}>
    <h3 style={TextStyle}>Detail View</h3>
    <div style={ImageWrapper}>
            <img src={ coat7} style={ImageStyle} />
    <img src={ coat8} style={ImageStyle} />
    </div>
    </div>
   
        </div>

        <div ref={sizeTableRef} style={FlexStyle}>
          {/* 사이즈 표 */}
          <h3 style={SizeStyle}>사이즈</h3>
          <SizeTable/>
          
        </div>

        <div id="reviews">
          {/* 리뷰페이지 */}
        </div>

        

        <div ref={relatedProductRef} style={FlexStyle}>
          <h4 style={RelatedStyle}>연관상품</h4>
          <div style={RelatedBorderStyle}><RelatedProduct/></div>
        </div>

        
      </div>
    );
  }

  export default Content;


// function Content({ sizeTableRef }) {
//     return (
//       <div>

//         <div id="information">
//         <br/>
//         <div style={{
//            margin: "100px"
//          }}>라펠 칼라 트렌치 코트. 어깨와 커프스 부분에 탭이 달린 긴소매 디자인. 
//         옆면 포켓 디테일. 같은 소재 리본 스타일 벨트.<br/>
//         <br/>
//         소재 정보<br/>
//         겉감<br/>
//         면 60%,  폴리에스터 29%, 폴리아미드 11%
//         </div>
//         <br/>
//         <br/>

//         <div>
// <table border="1" width="800px" height="300px">
//             <tr>
//                 <td colSpan={5}>소재 추가 정보</td>
                
//             </tr>
//             <tr>
//                 <td>착용시기</td>
//                 <td>봄</td>
//                 <td>여름</td>
//                 <td>가을</td>
//                 <td>겨울</td>
//             </tr>
//             <tr>
//                 <td>신축성</td>
//                 <td>없음</td>
//                 <td>보통</td>
//                 <td>좋음</td>
//                 <td></td>
//             </tr>
//             <tr>
//                 <td>비침</td>
//                 <td>없음</td>
//                 <td>조금 비침</td>
//                 <td>비침 있음</td>
//                 <td></td>
//             </tr>
//             <tr>
//                 <td>안감</td>
//                 <td>없음</td>
//                 <td>일부</td>
//                 <td>전체</td>
//                 <td></td>
//             </tr>
//           </table>
//         </div>
// <br/>
//         <div >
//         <h3>Outfit View</h3>
//             <img src={ coat1} width='500px'
//     height='600px' />
//     <img src={ coat4} width='500px'
//     height='600px'/>
//     </div>
//     <br/>
//         <br/>
//     <div >
//         <h3>Product View</h3>
//             <img src={ coat5} width='500px'
//     height='600px' />
//     <img src={ coat6} width='500px'
//     height='600px'/>
//     </div>
//     <br/>
//         <br/>
//     <div >
//         <h3>Detail View</h3>
//             <img src={ coat7} width='500px'
//     height='600px' />
//     <img src={ coat8} width='500px'
//     height='600px'/>
//     </div>
//     <br/>
//         <br/>
//         </div>

//         <div ref={sizeTableRef}>
//           {/* 사이즈 표 */}
//           <h3>사이즈</h3>
//           <table border="1" width="800px" height="300px">
//             <tr>
//                 <td>사이즈</td>
//                 <td>S</td>
//                 <td>M</td>
//                 <td>L</td>
//             </tr>
//             <tr>
//                 <td>가슴둘레</td>
//                 <td>102</td>
//                 <td>106</td>
//                 <td>111</td>
                
//             </tr>
//             <tr>
//                 <td>밑단둘레</td>
//                 <td>107</td>
//                 <td>111</td>
//                 <td>116</td>
                
//             </tr>
//             <tr>
//                 <td>소매길이</td>
//                 <td>53</td>
//                 <td>55</td>
//                 <td>56</td>
                
//             </tr>
//             <tr>
//                 <td>소매통너비</td>
//                 <td>22</td>
//                 <td>23</td>
//                 <td>24</td>
//             </tr>
//             <tr>
//                 <td>소맷부리너비</td>
//                 <td>18</td>
//                 <td>18.5</td>
//                 <td>19</td>
//             </tr>
//             <tr>
//                 <td>어깨너비</td>
//                 <td>51</td>
//                 <td>52</td>
//                 <td>53</td>
//             </tr>
//             <tr>
//                 <td>총 기장</td>
//                 <td>106</td>
//                 <td>109</td>
//                 <td>112</td>
//             </tr>
//           </table>
//         </div>

//         <div id="reviews">
//           {/* 리뷰페이지 */}
//         </div>

//         <br/>

//         <div id="related-products">
//           <h5>연관상품</h5>
//           <RelatedProduct/>
//         </div>
// <br/>
// <br/>
        
//       </div>
//     );
//   }

//   export default Content;



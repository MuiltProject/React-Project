import React from "react";
import coat1 from "../../../assets/Details/coat1.jpg";

import coat4 from "../../../assets/Details/coat4.jpg";
import coat5 from "../../../assets/Details/coat5.jpg";
import coat6 from "../../../assets/Details/coat6.jpg";
import coat7 from "../../../assets/Details/coat7.jpg";
import coat8 from "../../../assets/Details/coat8.jpg";
import RelatedProduct from "./relatedProduct";

import SizeTable from "./sizeTable";

// const FlexStyle = styled.div`

//   margin: 0 auto;
// `;

const FlexStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "80px",
};

const ImageStyle = {
  width: "500px",
  height: "600px",
  margin: "30px",
};

const ImageContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "200px",
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
  paddingBottom: "20px",
};

const SizeStyle = {
  paddingBottom: "20px",
};

const RelatedBorderStyle = {
  borderTopColor: "#807675",
  borderTopWidth: "2px",
  borderTopStyle: "solid",
  paddingTop: "30px",
};

function Content({ sizeTableRef, relatedProductRef }) {
  return (
    <div>
      <div id="information">
        <br />
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
            <img src={coat1} style={ImageStyle} alt="" />
            <img src={coat4} style={ImageStyle} alt="" />
          </div>
        </div>

        <div style={ImageContainer}>
          <h3 style={TextStyle}>Product View</h3>
          <div style={ImageWrapper}>
            <img src={coat5} style={ImageStyle} alt="" />
            <img src={coat6} style={ImageStyle} alt="" />
          </div>
        </div>

        <div style={ImageContainer}>
          <h3 style={TextStyle}>Detail View</h3>
          <div style={ImageWrapper}>
            <img src={coat7} style={ImageStyle} alt="" />
            <img src={coat8} style={ImageStyle} alt="" />
          </div>
        </div>
      </div>

      <div ref={sizeTableRef} style={FlexStyle}>
        {/* 사이즈 표 */}
        <h3 style={SizeStyle}>사이즈</h3>
        <SizeTable />
      </div>

      <div id="reviews">{/* 리뷰페이지 */}</div>

      <div ref={relatedProductRef} style={FlexStyle}>
        <h4 style={RelatedStyle}>연관상품</h4>
        <div style={RelatedBorderStyle}>
          <RelatedProduct />
        </div>
      </div>
    </div>
  );
}

export default Content;

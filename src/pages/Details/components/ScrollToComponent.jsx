import React, { useRef } from "react";
import MenuTabs from "./MenuTabs";
import Content from "./Content";


function ScrollToComponent() {
    const sizeTableRef = React.useRef();
    const relatedProductRef = React.useRef();
  
    const scrollToSizeTable = () => {
      sizeTableRef.current.scrollIntoView({ behavior: "smooth" });
    };
  
    const scrollToRelatedProduct = () => {
      relatedProductRef.current.scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <div>
        <MenuTabs
          scrollToSizeTable={scrollToSizeTable}
          scrollToRelatedProduct={scrollToRelatedProduct}
        />
        <Content sizeTableRef={sizeTableRef} relatedProductRef={relatedProductRef} />
      </div>
    );
  }

  export default ScrollToComponent;
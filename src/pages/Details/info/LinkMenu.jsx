import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";


const LinkMenu = () => {

  const LinkStyle = {
    textDecoration:'none', 
    color: '#807675' 
  };
  
  return (
   
    <div >
      
      <Link to="/details" style={ LinkStyle }>HOME</Link>
      <span>{'>'}</span> 
      <Link to="/details" style={ LinkStyle }>WOMEN</Link>
      <span>{'>'}</span>
      <Link to="/details" style={ LinkStyle }>OUTER</Link>
      
    </div>
  );
};

export default LinkMenu;

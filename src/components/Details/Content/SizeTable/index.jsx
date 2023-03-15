import React from "react";
import * as S from "./index.styled";


  
  function SizeTable({ sizeTableRef, relatedProductRef }) {
    return (
      <S.TableOption>
        <thead>
        <tr>
          <S.StyledTh>사이즈</S.StyledTh>
          <S.StyledTh>S</S.StyledTh>
          <S.StyledTh>M</S.StyledTh>
          <S.StyledTh>L</S.StyledTh>
        </tr>
        </thead>
        <tbody>
        <tr>
          <S.StyledTd>가슴둘레</S.StyledTd>
          <S.StyledTd>102</S.StyledTd>
          <S.StyledTd>106</S.StyledTd>
          <S.StyledTd>111</S.StyledTd>
        </tr>
        <tr>
          <S.StyledTd>밑단둘레</S.StyledTd>
          <S.StyledTd>107</S.StyledTd>
          <S.StyledTd>111</S.StyledTd>
          <S.StyledTd>116</S.StyledTd>
        </tr>
        <tr>
          <S.StyledTd>소매길이</S.StyledTd>
          <S.StyledTd>53</S.StyledTd>
          <S.StyledTd>55</S.StyledTd>
          <S.StyledTd>56</S.StyledTd>
        </tr>
        <tr>
          <S.StyledTd>소매통너비</S.StyledTd>
          <S.StyledTd>22</S.StyledTd>
          <S.StyledTd>23</S.StyledTd>
          <S.StyledTd>24</S.StyledTd>
        </tr>
        <tr>
          <S.StyledTd>소맷부리너비</S.StyledTd>
          <S.StyledTd>18</S.StyledTd>
          <S.StyledTd>18.5</S.StyledTd>
          <S.StyledTd>19</S.StyledTd>
        </tr>
        <tr>
          <S.StyledTd>어깨너비</S.StyledTd>
          <S.StyledTd>51</S.StyledTd>
          <S.StyledTd>52</S.StyledTd>
          <S.StyledTd>53</S.StyledTd>
        </tr>
        <tr>
          <S.StyledTd>총 기장</S.StyledTd>
          <S.StyledTd>106</S.StyledTd>
          <S.StyledTd>109</S.StyledTd>
          <S.StyledTd>112</S.StyledTd>
        </tr>
        </tbody>
      </S.TableOption>
    )}

        export default SizeTable;
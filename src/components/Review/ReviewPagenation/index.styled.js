import styled from "@emotion/styled";

const Paging = styled.div`
    margin-top: 12px;
    text-align: center;
`;
const PageBtn = styled.button`
    height: 34px;
    border: 1px solid #d5d5d5;
    border-radius: 6px;
    padding: 0 12px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    cursor: pointer;
    box-sizing: border-box;
    position: relative;
`;
const On = styled.div`
    background: pink;
`;

const Review_list_footer_paging = styled.div`
  background-color: #f8f8f8;
  display : flex;
  width: 100%;
  height : 50%;
  justify-content: center;
  align-items : top;
`;



export {Paging, PageBtn, On, Review_list_footer_paging}
import styled from "@emotion/styled";

const Review_list_item = styled.div`
  background-color: #8CAC6A;
  border-top : 1px solid #807675;
  display: flex;
  justify-content: left;
  align-items : center;
  width: 100%;
  height : 5%;
  flex :1;
`;

const Review_list_item_detail1 = styled.div`
  background-color : #f8f8f8;  
  display: flex;
  justify-content: center;
  align-items : center;
  width : 15%;
  height : 100%;  
  user-select: none;
`;

const Review_list_item_detail2 = styled.div`
  background-color : #f8f8f8;
  display: flex;
  justify-content: center;
  align-items : left;
  flex-direction: column;
  width : 85%;
  height : 100%;
  padding-left : 20px;
`;

const Review_list_item_image = styled.img`
  display: flex;
  justify-content: center;
  align-items : center;
  width : 100px;
  // height : 100px;
  aspect-ratio: 1/1; 
  cursor:pointer; 
`;

const Review_list_item_BuyItem = styled.span`
  font-size : 14px;
  color : #807675;
  cursor:pointer;
`;
// const Review_list_item_ContentTitle = styled.span`
//   font-size : 16px;
//   margin-bottom : 10px;
// `;
const Review_list_item_ContentWrite = styled.span`
  font-size : 14px;
  cursor:pointer;
`;
const Review_list_item_ContentID = styled.span`
  font-size : 14px;
  cursor:pointer;
`;

export { Review_list_item, 
  Review_list_item_detail1, 
  Review_list_item_detail2, Review_list_item_image,
  Review_list_item_BuyItem,
  //  Review_list_item_ContentTitle,
  Review_list_item_ContentWrite,Review_list_item_ContentID};
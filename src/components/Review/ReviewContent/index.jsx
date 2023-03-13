import React from "react";
import * as S from "./index.styled";

const ReviewListItem = ({product, content, account, image, getModal}) => {
  const onClick = () => {
    // 클릭시 모달창 열기
    getModal(true);
  };
  return (
    <S.Review_list_item>
      <S.Review_list_item_detail1>
        <S.Review_list_item_image src={image} onClick={onClick}></S.Review_list_item_image>
      </S.Review_list_item_detail1>
      <S.Review_list_item_detail2>
        <S.Review_list_item_BuyItem onClick={onClick}>{product}</S.Review_list_item_BuyItem>
        {/* <S.Review_list_item_ContentTitle>리뷰 제목</S.Review_list_item_ContentTitle> 제목 Data는 필요할거 같아서 냅둠*/} 
        <S.Review_list_item_ContentWrite onClick={onClick}>{content}</S.Review_list_item_ContentWrite>
        <S.Review_list_item_ContentID onClick={onClick}>{account}</S.Review_list_item_ContentID>
      </S.Review_list_item_detail2>
    </S.Review_list_item>
  );
};
export default ReviewListItem;

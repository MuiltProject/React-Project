import React from "react";
import * as S from "./index.styled";
import image from "../../../assets/Review/ReviewTest.jpg";
const ReviewListItem = ( {getModal} ) => {
  // const [modal, setModal] = useState(false)
  const onClick= () => { // 클릭시 모달창 열기
    getModal(true);
  }
  return (
        <S.Review_list_item>
            <S.Review_list_item_detail1>
              <S.Review_list_item_image src={image} onClick={onClick}>
              </S.Review_list_item_image>
              </S.Review_list_item_detail1>
            <S.Review_list_item_detail2>
              <S.Review_list_item_BuyItem onClick={onClick}>구매한 물품명</S.Review_list_item_BuyItem>
              {/* <S.Review_list_item_ContentTitle>리뷰 제목</S.Review_list_item_ContentTitle> */}
              <S.Review_list_item_ContentWrite onClick={onClick}>리뷰 내용</S.Review_list_item_ContentWrite>
              <S.Review_list_item_ContentID onClick={onClick}>리뷰작성 계정</S.Review_list_item_ContentID>
            </S.Review_list_item_detail2>
        </S.Review_list_item>
  );
}
export default ReviewListItem;
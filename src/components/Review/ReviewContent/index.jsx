import React from "react";
import * as S from "./index.styled";
import images from "../../../assets/Review/ReviewTest.jpg";
// import ReviewModal from "../ReviewModal";

const ReviewListItem = ({ product, content, account, image, getModal }) => {
  // const [modal, setModal] = useState(false)
  const onClick = () => {
    // 클릭시 모달창 열기
    getModal(true);
  };
  return (
    <S.Review_list_item>
      <S.Review_list_item_detail1>
        <S.Review_list_item_image src={images} onClick={onClick}></S.Review_list_item_image>
      </S.Review_list_item_detail1>
      <S.Review_list_item_detail2>
        <S.Review_list_item_BuyItem onClick={onClick}>{product}</S.Review_list_item_BuyItem>
        {/* <S.Review_list_item_ContentTitle>리뷰 제목</S.Review_list_item_ContentTitle> */}
        <S.Review_list_item_ContentWrite onClick={onClick}>{content}</S.Review_list_item_ContentWrite>
        <S.Review_list_item_ContentID onClick={onClick}>{account}</S.Review_list_item_ContentID>
      </S.Review_list_item_detail2>
    </S.Review_list_item>
  );
};
export default ReviewListItem;

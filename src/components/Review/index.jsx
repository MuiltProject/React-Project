import React, {useState} from "react";
import * as S from "./index.styled";
import ReviewListTitle from "./ReviewTitle";
import ReviewListItem from "./ReviewContent";
import ReviewSearch from "./ReviewSearch";
import ReviewModal from "./ReviewModal";
import BoardPage from "./ReviewPagenation";
import reviewData from "../../assets/Review/reviewData.json";

function ReviewList(props) {
  const [modal, setModal] = useState(false);

  const contentsPerPage = 12; // 페이지당 보여줄 컨텐츠 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

  const indexOfLastContent = currentPage * contentsPerPage;
  const indexOfFirstContent = indexOfLastContent - contentsPerPage;
  const currentContents = /*lists*/reviewData.reviews.slice(indexOfFirstContent, indexOfLastContent);


  const reviewItems = currentContents.map((content) => (
    <ReviewListItem
      key={content.id}
      image={content.image}
      product={content.product}
      content={content.content}
      account={content.account}
      getModal={() => setModal(true)}
    />
  ));
  
  return (
    <S.Container>
        <S.Review_list>
            <ReviewListTitle/>
            <ReviewSearch/>
            {modal && <ReviewModal CloseModal={()=> setModal(false)}/>}
            {reviewItems}
            <BoardPage totalContents={reviewData.reviews.length} contentsPerPage={contentsPerPage} setCurrentPage={setCurrentPage} />
        </S.Review_list>    
    </S.Container>
  );
}

export default ReviewList;

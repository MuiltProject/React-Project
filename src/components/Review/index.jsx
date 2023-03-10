import React, {useState} from "react";
import * as S from "./index.styled";
import ReviewListTitle from "./ReviewTitle";
import ReviewListItem from "./ReviewContent";
//import ReviewListType from "./ReviewType";
import ReviewSearch from "./ReviewSearch";
import ReviewModal from "./ReviewModal";
import BoardPage from "./ReviewPagenation";
import reviewData from "../../assets/Review/reviewData.json";

function ReviewList(props) {
  const [modal, setModal] = useState(false);
  // const [lists,setlists] = useState(reviews.reviews.map((review) => 
  // ({id: review.id, text: <ReviewListItem getModal={(setModal)} review={review}/> })));



  // const [lists,setlists] = useState([
  //   {id : 1 , text : <ReviewListItem getModal={(setModal)}/>},
  //   {id : 2 , text : <ReviewListItem getModal={(setModal)}/>},
  //   {id : 3 , text : <ReviewListItem getModal={(setModal)}/>},
  //   {id : 4 , text : <ReviewListItem getModal={(setModal)}/>},
  //   {id : 5 , text : <ReviewListItem getModal={(setModal)}/>},
  //   {id : 6 , text : <ReviewListItem getModal={(setModal)}/>},
  //   {id : 7 , text : <ReviewListItem getModal={(setModal)}/>},
  //   {id : 8 , text : <ReviewListItem getModal={(setModal)}/>},
  //   {id : 9 , text : <ReviewListItem getModal={(setModal)}/>},
  //   {id : 10 , text : <ReviewListItem getModal={(setModal)}/>},
  //   {id : 11 , text : <ReviewListItem getModal={(setModal)}/>},
  //   {id : 12 , text : <ReviewListItem getModal={(setModal)}/>},
  //   {id : 13 , text : <ReviewListItem getModal={(setModal)}/>},
  //   {id : 14 , text : <ReviewListItem getModal={(setModal)}/>},
  //   {id : 15 , text : <ReviewListItem getModal={(setModal)}/>},
  // ]) //ReviewListItem 컴포넌트 배열.
  
  // const [nextId,setNextId] = useState(3); // id값 증가 state
  // const getModal = (modal) =>{
  //   setModal(modal);
  // }

  // const onClick = () => {
  //   const nextLists = lists.concat({id : nextId, text : <ReviewListItem/>});
  //   setNextId(nextId + 1)
  //   setlists(nextLists);
  // }

  //const reviewitems = lists.map((list) => <>{list.text}</>);

  const contentsPerPage = 12; // 페이지당 보여줄 컨텐츠 개수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

  const indexOfLastContent = currentPage * contentsPerPage;
  const indexOfFirstContent = indexOfLastContent - contentsPerPage;
  const currentContents = /*lists*/reviewData.reviews.slice(indexOfFirstContent, indexOfLastContent);

  // const reviewitems = currentContents.map((content) => (
  //   <ReviewListItem key={content.id} text={content.text} getModal={() => setModal(true)} />
  // ));
  const reviewitems = currentContents.map((content) => (
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
            {/* <button onClick = {onClick}>추가</button> */}
            {modal && <ReviewModal CloseModal={()=> setModal(false)}/>}
            {/* <ReviewModal closeModal={() => setModal(!modal)}/> */}
            {reviewitems}
            <BoardPage totalContents={reviewData.reviews.length} contentsPerPage={contentsPerPage} setCurrentPage={setCurrentPage} />
            {/* <ReviewListFooter/>        */}
        </S.Review_list>    
    </S.Container>
  );
}

export default ReviewList;

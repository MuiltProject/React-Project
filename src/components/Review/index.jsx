import React, {useState} from "react";
import * as S from "./index.styled";
import ReviewListTitle from "./ReviewTitle";
import ReviewListItem from "./ReviewContent";
import ReviewListType from "./ReviewType";
import ReviewListFooter from "./ReviewFoot";
import ReviewSearch from "./ReviewSearch";
import ReviewModal from "./ReviewModal";


function ReviewList(props) {
  const [modal, setModal] = useState(false);

  const [lists,setlists] = useState([
    {id : 1 , text : <ReviewListItem getModal={(setModal)}/>},
    {id : 2 , text : <ReviewListItem getModal={(setModal)}/>},
    {id : 3 , text : <ReviewListItem getModal={(setModal)}/>},
    {id : 4 , text : <ReviewListItem getModal={(setModal)}/>},
    {id : 5 , text : <ReviewListItem getModal={(setModal)}/>},
    {id : 6 , text : <ReviewListItem getModal={(setModal)}/>},
    {id : 7 , text : <ReviewListItem getModal={(setModal)}/>},
    {id : 8 , text : <ReviewListItem getModal={(setModal)}/>},
    {id : 9 , text : <ReviewListItem getModal={(setModal)}/>},
    {id : 10 , text : <ReviewListItem getModal={(setModal)}/>},
    {id : 11 , text : <ReviewListItem getModal={(setModal)}/>},
    {id : 12 , text : <ReviewListItem getModal={(setModal)}/>},
    // {id : 13 , text : <ReviewListItem getModal={(setModal)}/>},
    // {id : 14 , text : <ReviewListItem getModal={(setModal)}/>},
    // {id : 15 , text : <ReviewListItem getModal={(setModal)}/>},
  ]) //ReviewListItem 컴포넌트 배열.
  
  const [nextId,setNextId] = useState(3); // id값 증가 state

  // const getModal = (modal) =>{
  //   setModal(modal);
  // }

  const reviewitems = lists.map((list) => <>{list.text}</>);

  const onClick = () => {
    const nextLists = lists.concat({id : nextId, text : <ReviewListItem/>});
    setNextId(nextId + 1)
    setlists(nextLists);
  }

  
  return (
    <S.Container>
        <S.Review_list>
            <ReviewListTitle/>
            <ReviewSearch/>
            {/* <button onClick = {onClick}>추가</button> */}
            {modal && <ReviewModal CloseModal={()=> setModal(false)}/>}
            {/* <ReviewModal closeModal={() => setModal(!modal)}/> */}
            {reviewitems}
            <ReviewListFooter/>       
        </S.Review_list>
        
           
    </S.Container>
  );
}
export default ReviewList;

import React from "react";
import * as S from "./index.styled";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import BoardPage from "../ReviewPagenation";

function ReviewListFooter() {
  
  return (
        <S.Review_list_footer>
            <S.Review_list_footer_paging>
                    <BoardPage maxPage="15" pageLimit='10'/>     
            </S.Review_list_footer_paging>
            </S.Review_list_footer>
  );
}
export default ReviewListFooter;
import React, {useState, useEffect} from 'react';
import * as S from "./index.styled";

function BoardPage({totalContents, contentsPerPage, setCurrentPage})
{
const pageNumbers = [1,2,3,4,5,6,7,8,9]; //하드코딩
const totalPages = Math.ceil(totalContents / contentsPerPage) // 전체 페이지 수
const maxPages = Math.min(10, totalPages) // 최대 페이지 수 ( 디폴트 : 10 )
const [currentGroup, setCurrentGroup] = useState(1); // 현재 그룹
const [startPage, setStartPage] = useState(1); // 시작 페이지
const [endPage, setEndPage] = useState(maxPages); // 끝 페이지

//페이지 그룹 이동
const changeGroup = (group) => {
    setCurrentGroup(group);
    setStartPage((group-1) * maxPages + 1);
    setEndPage(Math.min(group * maxPages, totalPages));
}

useEffect(()=> {
 setCurrentPage(startPage);
}, [startPage,setCurrentPage]);

// for (let i = startPage; i <=endPage; i++){
//     pageNumbers.push(i);
// }// 페이지 버튼을 생성한다.

return(
<S.BoardPageContainer>
<S.BoardPageButton
  disabled={currentGroup === 1}
  onClick={() => changeGroup(currentGroup - 1)}
>
  {"<"}
</S.BoardPageButton>
{startPage > maxPages && (<S.BoardPageButton disabled={true}>...</S.BoardPageButton>)}
{pageNumbers.map((page) => (
  <S.BoardPageButton
    key={page}
    active={startPage === page}
    onClick={() => setStartPage(page)}
  >
    {page}
  </S.BoardPageButton>
))}
{endPage < totalPages && (<S.BoardPageButton disabled={true}>...</S.BoardPageButton>)}
<S.BoardPageButton
  disabled={currentGroup === Math.ceil(totalPages / maxPages)}
  onClick={() => changeGroup(currentGroup + 1)}
>
  {">"}
</S.BoardPageButton>
</S.BoardPageContainer>
);
}

export default BoardPage;
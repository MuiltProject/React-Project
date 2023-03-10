import React from "react";

function MaterialTable({ sizeTableRef, relatedProductRef }) {
    return (
        <table border="1" width="800px" height="300px">
            <tr>
                <td colSpan={5}>소재 추가 정보</td>
                
            </tr>
            <tr>
                <td>착용시기</td>
                <td>봄</td>
                <td>여름</td>
                <td>가을</td>
                <td>겨울</td>
            </tr>
            <tr>
                <td>신축성</td>
                <td>없음</td>
                <td>보통</td>
                <td>좋음</td>
                <td></td>
            </tr>
            <tr>
                <td>비침</td>
                <td>없음</td>
                <td>조금 비침</td>
                <td>비침 있음</td>
                <td></td>
            </tr>
            <tr>
                <td>안감</td>
                <td>없음</td>
                <td>일부</td>
                <td>전체</td>
                <td></td>
            </tr>
          </table>
           );
        }

        export default MaterialTable;
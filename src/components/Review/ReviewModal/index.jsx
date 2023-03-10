import React, {useEffect} from 'react';
import * as S from "./index.styled";
import image from "../../../assets/Review/ReviewTest.jpg";
import profile from "../../../assets/Review/profile.jpg";

function ReviewModal(props){

    function CloseModal() {
        props.CloseModal();
    }

    useEffect(()=> { //랜더링 될 때, (modal이 켜질 때) 스크롤 방지
        document.body.style.overflow = 'hidden'; //body 부분 hidden
        return () =>{
            document.body.style.overflow = ''; // 꺼지면 초기화
        };
    },[])
   
    return (
        <S.Review_Modal onClick={CloseModal}>
            <S.Review_Modal_Body onClick={(e) => e.stopPropagation()}>
            <S.Review_Modal_CloseBtn onClick={CloseModal}>✖</S.Review_Modal_CloseBtn>
            <S.flexContainer>
                <S.Review_Modal_Body_section1>
                <S.Review_Modal_ImagePrd src={image}></S.Review_Modal_ImagePrd>
                </S.Review_Modal_Body_section1>
                <S.Review_Modal_Body_section2>
                <S.Review_Modal_InfoStarSection>
                <S.Review_Modal_InfoStar_userImgContainer>
                <S.Review_Modal_InfoStar_userImg src={profile}></S.Review_Modal_InfoStar_userImg>
                </S.Review_Modal_InfoStar_userImgContainer>
                <S.Review_Modal_InfoStar_StarIDContaner>
                <S.Review_Modal_InfoStar_Star>⭐⭐⭐⭐⭐</S.Review_Modal_InfoStar_Star>
                {/* 추후 리뷰 별점 기능 구현? */}
                <S.Review_Modal_InfoStar_userID>&nbsp;&nbsp;사용자 ID</S.Review_Modal_InfoStar_userID>
                </S.Review_Modal_InfoStar_StarIDContaner>
                </S.Review_Modal_InfoStarSection>           
                     <S.Review_Modal_ContentSection>
                    <S.Review_Modal_Content>
                    이 옷은 저의 취향에 꼭 맞는 스타일이어서 마음에 들었습니다. 제품 설명과 이미지에서 보여지는 것과 똑같이 디자인되어 있었고, 착용감도 매우 편안했습니다.

이 옷은 가볍고 통기성이 좋은 소재로 만들어져 있어서 여름철에 입기 딱 좋은 아이템입니다. 또한, 슬림하면서도 자연스럽게 떨어지는 핏으로 제 몸매에도 잘 어울렸습니다.

그리고 중요한 것은 제가 기대했던 것보다도 품질이 더 좋았다는 점입니다. 소재의 품질도 높았고, 마감도 깔끔하게 처리되어 있었습니다. 물론, 가격대도 적절하게 설정되어 있어서, 제가 이 옷을 구매한 것에 대해 전혀 후회하지 않고 있습니다.

마지막으로, 이 옷은 다양한 색상과 사이즈로 제공되어 있어서, 다른 분들도 저와 같은 만족을 느끼실 수 있을 것 같습니다. 그러므로, 이 옷을 추천하고 싶은 마음에 리뷰를 작성하게 되었습니다.
                    </S.Review_Modal_Content>
                     <S.Review_Modal_BuyItemBox>
                        <S.Review_Modal_BuyItemImage src={image}></S.Review_Modal_BuyItemImage>
                        <S.Review_Modal_BuyItemName>구매 상품명</S.Review_Modal_BuyItemName>
                     </S.Review_Modal_BuyItemBox>
                 </S.Review_Modal_ContentSection>
                </S.Review_Modal_Body_section2>
            </S.flexContainer>
                
        </S.Review_Modal_Body>
        </S.Review_Modal>
        )     
}

export default  ReviewModal;
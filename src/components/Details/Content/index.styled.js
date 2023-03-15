import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px;
`;

const Image = styled.img`
  width: 500px;
  height: 600px;
  margin: 30px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 200px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Text = styled.h3`
  position: relative;
  left: -430px;
  top: 0;
`;

const Related = styled.h4`
  position: relative;
  left: -430px;
  top: 0;
  padding-bottom: 20px;
`;

const RelatedBorder = styled.div`
  border-top-color: #807675;
  border-top-width: 2px;
  border-top-style: solid;
  padding-top: 30px;
`;

const Size = styled.h3`
  padding-bottom: 20px;
`;

export {
  Container,
  Text,
  Image,
  ImageContainer,
  ImageWrapper,
  Related,
  RelatedBorder,
  Size,
};

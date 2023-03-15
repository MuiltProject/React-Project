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

const Info = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-top: 150px;
`;

const Related = styled.div`
  position: relative;
  width: 80%;
  top: 0;
  text-align: center;
  padding-bottom: 20px;
  border-bottom-color: #807675;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  margin-bottom: 30px;
  font-size: 24px;
  color: #807675;
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
  Size,
  Info,
};

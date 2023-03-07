import styled from "@emotion/styled";

const Container = styled.div`
  margin: 0 7vh;
  padding-bottom: 10vh;
`;

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
`;

const Header = styled.h1`
  position: absolute;
  color: #f8f8f8;
  font-size: 2rem;
  margin-top: 40vh;
`;

const Pic = styled.img`
  width: 33wh;
  height: 55vh;
  background-color: #f8f8f8;
  border-radius: 7px;
  transition: all 0.5s;
  &: hover {
    filter: brightness(0.5);
    transform: scale(1.05);
  }
`;

export { Container, Wrapper, Header, Pic };

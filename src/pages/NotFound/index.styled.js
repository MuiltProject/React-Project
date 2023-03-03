import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Spin = styled.img`
  margin-top: 50px;
  width: 25%;
  height: auto;

  animation: rotate_image 6s linear infinite;
  transform-origin: 50% 50%;

  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { Container, Spin };

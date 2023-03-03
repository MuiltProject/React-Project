import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  padding-top: 5%;
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spin = styled.img`
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

export { Container, Text, Spin };

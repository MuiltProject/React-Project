import styled from "@emotion/styled";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 250px;

  background-color: #f8f8f8;

  z-index: 999;
`;

const Content = styled.div`
  float: left;
  width: 20%;
  height: 250px;

  padding-left: 5%;
`;

const Text = styled.p`
  color: #0f010d;
  opacity: 0.5;
  &: hover {
    opacity: 1;
  }
`;

const Link = styled.a``;

export { Container, Content, Text, Link };

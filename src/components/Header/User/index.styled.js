import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 75%;
  width: 25%;
  height: 100px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25%;
  height: 50%;
  float: left;
`;

const Icon = styled.p`
  color: #0f010d;
  transform: scale(1.1);

  transition: all 0.3s;
  &: hover {
    transform: scale(1.3);
  }
`;

export { Container, IconContainer, Icon };

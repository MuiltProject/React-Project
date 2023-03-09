import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  display: flex;
  margin-left: 15%;
  width: 30%;
  height: 100px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 25%;
  transition: all 0.3s;
  &: hover {
    transform: scale(1.1);
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  color: #0f010d;

  text-decoration: none;
`;

export { Container, TextContainer, StyledLink };

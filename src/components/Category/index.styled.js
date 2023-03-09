import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Pic = styled.img`
  width: 100%;
  height: 62.5vh;
  filter: brightness(0.9);
  &: hover {
    filter: brightness(1);
  }
`;

const Text = styled.p`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 50vh;
  width: 5vw;
  height: 4vh;
  z-index: 1;

  font-size: 1.5rem;
  color: black;
  border-radius: 3px;
  background-color: #f8f8f8;
`;

const StyledLink = styled(Link)`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Container, Section, Header, Wrapper, Pic, Text, StyledLink };

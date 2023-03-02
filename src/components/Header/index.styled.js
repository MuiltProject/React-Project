import styled from "@emotion/styled";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;

  background-color: #f8f8f8;

  z-index: 999;
`;

const LogoContainer = styled.div`
  position: absolute;
  width: 15%;
  height: 100px;
  background-color: red;
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f010d;
`;

const CategoryContainer = styled.div`
  position: absolute;
  display: flex;
  margin-left: 15%;
  width: 30%;
  height: 100px;
  background-color: blue;
`;

const SearchContainer = styled.div`
  position: absolute;
  margin-left: 45%;
  width: 30%;
  height: 100px;
  background-color: purple;
`;

const UserContainer = styled.div`
  position: absolute;
  margin-left: 75%;
  width: 25%;
  height: 100px;
  background-color: black;
`;

export { Container, LogoContainer, Logo, CategoryContainer, SearchContainer, UserContainer };

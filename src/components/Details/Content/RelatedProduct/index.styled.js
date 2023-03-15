import styled from "@emotion/styled";

const Button = styled.button`
  background-color: white;
  color: black;
  font-size: 50px;
  border: none;
  cursor: pointer;
`;

const Text = styled.p`
  text-align: right;
`;

const Image = styled.img`
  width: 250px;
  height: 300px;
`;

const ImageContainer = styled.div`
  margin: 0 30px;
`;

const Container = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;

export { Button, Text, Image, ImageContainer, Container };

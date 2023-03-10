import styled from "@emotion/styled";

const Container = styled.div``;

const Line = styled.div`
  background-color: black;
  width: 70vw;
  height: 1px;
`;

const ProductList = styled.ul`
  display: flex;
  list-style: none;
  margin: 1vh 0;
  padding: 0px;
  width: 70vw;
  text-align: center;
  align-items: center;
`;

const total = styled.li`
  width: 10%;
`;

const image = styled.li`
  width: 10%;
`;

const name = styled.li`
  width: 60%;
`;

const count = styled.li`
  width: 30%;
`;

const price = styled.li`
  width: 30%;
`;

const eachPrice = styled.li`
  width: 30%;
`;

const orderManagement = styled.li`
  width: 30%;
`;

const totalPrice = styled.li`
  width: 20%;
`;

const Pic = styled.img`
  height: 10vh;
`;

export { total, image, name, count, price, eachPrice, orderManagement, Container, Line, ProductList, totalPrice, Pic };

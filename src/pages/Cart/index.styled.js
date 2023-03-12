import styled from "@emotion/styled";

const Container = styled.div`
  margin: 5vh 0 5vh 25vh;
`;

const BoldLine = styled.div`
  background-color: black;
  margin-top: 2vh;
  width: 70vw;
  height: 2px;
`;

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
  justify-content: space-around;
`;

const Index = styled.li`
  width: 10%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
`;

const Pic = styled.img`
  width: 150px;
`;

const Name = styled.li`
  font-family: "GmarketSans";
`;

const Quantity = styled.li`
  width: 10%;
`;

const Price = styled.li`
  width: 20%;
`;

const EachPrice = styled.li`
  width: 20%;
`;

const OrderManagement = styled.li`
  width: 10%;
`;

export {
  Container,
  ProductList,
  Index,
  Wrapper,
  Pic,
  Name,
  Quantity,
  Price,
  EachPrice,
  OrderManagement,
  BoldLine,
  Line,
};

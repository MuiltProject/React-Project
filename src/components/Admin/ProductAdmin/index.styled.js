import styled from "@emotion/styled";

const Text = styled.div`
  margin: 30px;
  text-align: center;
  padding: 10px;
  border-collapse: collapse;
  font-size: 21px;
  border-bottom: 1px solid #ede3d7;
`;

const Info = styled.div`
  margin: -30px 0 0 500px;
  font-size: 12px;
  text-align: left;
`;
const ProductTable = styled.table`
  margin: 10px;
  width: 70%;
  height: 40%;
  text-align: center;
  border-collapse: collapse;
  border: 1px solid #0f010d;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px;
`;

const StyledTh = styled.th`
  text-align: center;
  background: #ede3d7;
  border: 1px solid #0f010d;
  font-size: 18px;
`;

const ProductTd = styled.td`
  width: 14.28%;
  text-align: center;
  border: 1px solid #0f010d;
`;

const ProductlistTable = styled.table`
  margin: 30px 0;
  width: 60%;
  text-align: center;
  border-collapse: collapse;
  border: 1px solid #0f010d;
`;

const ProductlistContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`;

const ProductlistTh = styled.th`
  width: 25%;
  text-align: center;
  border: 1px solid #0f010d;
`;

const ProductlistTd = styled.td`
  width: 13.3%;
  text-align: center;
  border: 1px solid #0f010d;
`;

const Footer = styled.td`
  text-align: center;
  border: 1px solid #0f010d;
`;

const Button = styled.button`
  background: #0f010d;
  color: white;
  padding: 5px 10px;
  margin: 0 5px;
  border: 1px solid #0f010d;

  &:hover {
    background: white;
    color: #0f010d;
    font-weight: bold;
    border: 1px solid black;
  }
`;

const ChangeButton = styled.button`
  background: #807675;
  color: white;
  margin: 0 5px;
  border: 1px solid #807675;
  padding: 5px 10px;

  &:hover {
    background: white;
    color: #0f010d;
    font-weight: bold;
    border: 1px solid black;
  }
`;

export {
  Text,
  Info,
  ProductTable,
  ProductContainer,
  StyledTh,
  ProductTd,
  ProductlistTable,
  ProductlistContainer,
  ProductlistTh,
  ProductlistTd,
  Footer,
  Button,
  ChangeButton,
};

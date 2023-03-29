import styled from "@emotion/styled";

const Text = styled.div`
  margin: 30px;
  text-align: center;
  padding: 10px;
  border-collapse: collapse;
  font-size: 21px;
  // background: #ede3d7;
  border-bottom: 1px solid #ede3d7;
`;
const Info = styled.div`
  margin: -30px 0 0 500px;
  font-size: 12px;
  text-align: left;
`;

const MemberTable = styled.table`
  margin: 10px;
  width: 50%;
  height: 40%;
  text-align: center;
  border-collapse: collapse;
  border: 1px solid #0f010d;
`;

const MemberContainer = styled.div`
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
const MemberTd = styled.td`
  width: 33%;
  text-align: center;
  border: 1px solid #0f010d;
`;

const MemberlistTable = styled.table`
  margin: 30px 0;
  // height: 200px;
  width: 50%;
  text-align: center;
  border-collapse: collapse;
  border: 1px solid #0f010d;
`;

const MemberlistContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
`;

const MemberlistTh = styled.th`
  width: 25%;
  text-align: center;
  // border-collapse: collapse;
  border: 1px solid #0f010d;
`;

const MemberlistTd = styled.td`
  width: 25%;
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

  &:hover {
    background: #ede3d7;
    color: #0f010d;
    font-weight: bold;
  }
`;

export {
  Text,
  Info,
  MemberTable,
  MemberContainer,
  StyledTh,
  MemberTd,
  MemberlistTable,
  MemberlistContainer,
  MemberlistTh,
  MemberlistTd,
  Footer,
  Button,
};

import React from "react";

// const TableStyle = {
//     width: '25%',
//     textAlign: 'center'
//   };
const TableOption = {
  width: "1000px",
  height: "400px",
};
const TableStyle = {
  width: "25%",
  textAlign: "center",
  th: {
    width: "25%",
    textAlign: "center",
    borderTopColor: "#E5CDCE",
    borderTopWidth: "1px",
    borderBottomColor: "#E5CDCE",
    borderBottomWidth: "1px",
  },
  td: {
    width: "25%",
    textAlign: "center",
    borderBottomColor: "#E5CDCE",
    borderBottomWidth: "1px",
    borderColor: "rgba(229, 205, 206, .5)",
  },
};

function SizeTable({ sizeTableRef, relatedProductRef }) {
  return (
    <table style={TableOption}>
      <tr>
        <th style={TableStyle.th}>사이즈</th>
        <th style={TableStyle.th}>S</th>
        <th style={TableStyle.th}>M</th>
        <th style={TableStyle.th}>L</th>
      </tr>
      <tr>
        <td style={TableStyle.td}>가슴둘레</td>
        <td style={TableStyle.td}>102</td>
        <td style={TableStyle.td}>106</td>
        <td style={TableStyle.td}>111</td>
      </tr>
      <tr>
        <td style={TableStyle.td}>밑단둘레</td>
        <td style={TableStyle.td}>107</td>
        <td style={TableStyle.td}>111</td>
        <td style={TableStyle.td}>116</td>
      </tr>
      <tr>
        <td style={TableStyle.td}>소매길이</td>
        <td style={TableStyle.td}>53</td>
        <td style={TableStyle.td}>55</td>
        <td style={TableStyle.td}>56</td>
      </tr>
      <tr>
        <td style={TableStyle.td}>소매통너비</td>
        <td style={TableStyle.td}>22</td>
        <td style={TableStyle.td}>23</td>
        <td style={TableStyle.td}>24</td>
      </tr>
      <tr>
        <td style={TableStyle.td}>소맷부리너비</td>
        <td style={TableStyle.td}>18</td>
        <td style={TableStyle.td}>18.5</td>
        <td style={TableStyle.td}>19</td>
      </tr>
      <tr>
        <td style={TableStyle.td}>어깨너비</td>
        <td style={TableStyle.td}>51</td>
        <td style={TableStyle.td}>52</td>
        <td style={TableStyle.td}>53</td>
      </tr>
      <tr>
        <td style={TableStyle.td}>총 기장</td>
        <td style={TableStyle.td}>106</td>
        <td style={TableStyle.td}>109</td>
        <td style={TableStyle.td}>112</td>
      </tr>
    </table>
  );
}

export default SizeTable;

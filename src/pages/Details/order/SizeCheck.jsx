import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const ButtonStyle = {
  backgroundColor: "white",
  borderColor: "black",
  color: "black",
  borderRadius: "0",
  margin: "25px 25px 15px 25px",
  width: "45px",
  height: "45px",
  textAlign: "center",
  fontSize: "20px",
};

const SelectedButtonStyle = {
  backgroundColor: "black",
  color: "white",
  borderColor: "black",
  borderRadius: "0",
  margin: "25px 25px 15px 25px",
  width: "45px",
  height: "45px",
  textAlign: "center",
  fontSize: "20px",
};

function SizeCheck() {
  // const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "S", value: "1" },
    { name: "M", value: "2" },
    { name: "L", value: "3" },
  ];

  return (
    <>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? "outline-success" : "outline-danger"}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            style={radioValue === radio.value ? SelectedButtonStyle : ButtonStyle}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

export default SizeCheck;

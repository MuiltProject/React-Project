import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import * as S from "./index.styled";


function SizeCheck() {
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
            style={radioValue === radio.value ? S.SelectedButton : S.Button}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

export default SizeCheck;

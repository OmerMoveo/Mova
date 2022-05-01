import React from "react";
import { StyledSelect } from "./style";
function Select(props) {
  return (
    <StyledSelect>
      <option disabled selected>
        {props.title}
      </option>
      {props.options.map((item) => (
        <option>{item}</option>
      ))}
    </StyledSelect>
  );
}

export default Select;

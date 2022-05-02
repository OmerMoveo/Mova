import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../context/AppState";
import { StyledSelect } from "./style";

function Select(props) {
  const { setSelectedColumn, selectedColumn } = useContext(AppContext);
  return (
      
    <StyledSelect value={selectedColumn} onChange={setSelectedColumn}>
      <option disabled selected>
        {props.title}
      </option>
      {props.options &&
        props.options.map((item, index) => (
          <option key={index}>{item.title}</option>
        ))}
    </StyledSelect>
  );
}

export default Select;

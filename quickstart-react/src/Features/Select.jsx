import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../context/AppState";
import { StyledSelect } from "./style";
import { StyledDropdown } from "./style";
function Select(props) {
  const { setSelectedColumn, selectedColumn } = useContext(AppContext);
  const ArrayToArrayOfObjects = (arrOfItems) =>
    arrOfItems.map((item) => {
      return { value: item.title, label: item.title };
    });
  return (
    <StyledDropdown
      placeholder={selectedColumn || props.title}
      value={selectedColumn}
      onChange={(e) => {
        if (!e) return;
        setSelectedColumn(e.value);
      }}
      options={props.options && ArrayToArrayOfObjects(props.options)}
    ></StyledDropdown>
  );
}

export default Select;

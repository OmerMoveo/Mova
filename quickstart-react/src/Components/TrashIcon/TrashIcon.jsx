import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
const TrashIcon = ({ className, clickHandler }) => {
  return (
    <FontAwesomeIcon
      className={className}
      icon={faTrashCan}
      onClick={clickHandler}
    />
  );
};

export default TrashIcon;

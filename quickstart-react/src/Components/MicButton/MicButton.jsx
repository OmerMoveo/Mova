import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
const MicButton = ({ className }) => {
  return <FontAwesomeIcon className={className} icon={faMicrophone} />;
};

export default MicButton;

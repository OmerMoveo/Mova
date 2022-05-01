import styled from "styled-components";
import TrashIcon from "./TrashIcon";

export const StyledTrashBtn = styled(TrashIcon)`
  color: gray;
  transform: scale(1.5);
  margin-left: auto;
  opacity: ${(props) => (props.active ? "1" : "0.4")};
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

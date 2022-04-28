import styled from "styled-components";
import TrashIcon from "./TrashIcon";

export const StyledTrashBtn = styled(TrashIcon)`
  color: gray;
  transform: scale(1.5);
  margin-left: auto;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

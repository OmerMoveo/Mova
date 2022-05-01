import styled from "styled-components";

export const MicWrapper = styled.div`
  background-color: ${(props) => (props.active ? "#E2445C" : "#0073EA")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50rem;
  height: 5em;
  width: 5em;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #33354b;
  align-items: center;
  border-radius: 5rem;
  padding: 5rem;
  border: 0.1em solid #181C3C;
  box-shadow: 0em 0em 0.3em white;
`;

export const ListenStatus = styled.p`
  //color: ${(props) => (props.active ? "white" : "#676879")};
  text-align: center;
  color: white;
  font-weight: bolder;
`;

export const StyledSelect = styled.select`
  height: 30px;
  padding: 0 0.5em;
  background-color: #0073EA;
  color: white;
  position: relative;
  text-align: center;
  width: 12em;
  :hover {
    cursor: pointer;
  }
`;

export const SendButtonStyled = styled.button`
  margin-top: 10px;
  width: 12em;
  color:white;
  padding: 4px 8px;
  height: 32px;
  background-color: transparent;
  border: 1px solid #181C3C;
  border-radius: 4px;
  box-shadow: 0em 0em 0.2em white;
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
    font-style: italic;
    color: darkgray;
  }
  :not([disabled]):hover {
    background-color: #181C3C;
  }
`;

export const SelectSendDiv = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 12em;
`;

export const OutputContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 1rem;
  height: 8em;
  width: 20em;
  max-width: 20em;
  padding: 0.5em 1em;
  margin: 1em 0;
  background-color: white
`;

export const OutputText = styled.p`
  font-size: 1.2em;
  margin: 0;
  max-height: 4em;
  overflow-y: scroll;
`;

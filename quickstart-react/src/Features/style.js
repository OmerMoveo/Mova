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
  background-color: ${(props) =>
    props.theme === "light" ? "transparent" : "#0073EA"};
  align-items: center;
  border-radius: 5rem;
  padding: 3rem;
  border: 0.1em solid #181c3c;
  box-shadow: 0em 0em 0.2em white;
`;

export const ListenStatus = styled.p`
  color: ${(props) => (props.theme === "light" ? "black" : "white")};
  text-align: center;
  font-weight: bolder;
  font-family: "Arial";
`;

export const StyledSelect = styled.select`
  height: 30px;
  padding: 0 0.5em;
  background-color: #0073ea;
  color: white;
  position: relative;
  text-align: center;
  width: 12em;
  margin-bottom: 8px;
  :hover {
    cursor: pointer;
  }
`;

export const SendButtonStyled = styled.button`
  margin-top: 10px;
  width: 12em;
  color: white;
  padding: 4px 8px;
  height: 32px;
  background-color: transparent;
  border: 1px solid #181c3c;
  border-radius: 4px;
  box-shadow: 0em 0em 0.2em white;
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
    font-style: italic;
    color: darkgray;
  }
  :not([disabled]):hover {
    background-color: #181c3c;
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
  background-color: white;
`;

export const OutputText = styled.p`
  font-size: 1.2em;
  margin: 0;
  max-height: 4em;
  overflow-y: scroll;
`;

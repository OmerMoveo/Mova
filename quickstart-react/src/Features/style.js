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
    props.theme === "light" ? "rgb(130, 128, 121)" : "#33354b"};
  align-items: center;
  border-radius: 5rem;
  padding: 2rem 5rem;
  box-shadow: ${(props) =>
    props.theme === "light"
      ? "0.2em 0.2em 0.3em rgb(130, 128, 121)"
      : "0.2em 0.2em 0.3em #33354b"};
`;

export const ListenStatus = styled.p`
  color: white;
  text-align: center;
  font-weight: bolder;
`;

export const StyledSelect = styled.select`
  height: 30px;
  padding: 0 0.5em;
  background-color: ${(props) => (props.disabled ? "#c6c6c6" : "#0073ea")};
  color: white;
  position: relative;
  text-align: center;
  width: 12em;
  margin-bottom: 8px;
  :hover {
    cursor: pointer;
    background-color: #075bb3;
  }
`;

export const SendButtonStyled = styled.button`
  margin-top: 10px;
  width: 12em;
  color: white;
  padding: 4px 8px;
  height: 32px;
  background-color: #0073ea;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
    font-style: italic;
    color: darkgray;
    background-color: #c6c6c6;
  }
  :not([disabled]):hover {
    background-color: #075bb3;
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

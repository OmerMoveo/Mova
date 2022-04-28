import styled from "styled-components";

export const MicWrapper = styled.div`
  background-color: ${(props) => (props.active ? "green" : "red")};
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
  align-items: center;
  background-color: white;
  border-radius: 5rem;
  padding: 5rem;
`;

export const ListenStatus = styled.p`
  color: ${(props) => (props.active ? "green" : "red")};
  text-align: center;
`;

export const StyledSelect = styled.select`
  height: 30px;
  padding: 0 0.5em;
  background-color: white;
`;

export const SendButtonStyled = styled.button`
  margin-top: 10px;
  width: 80px;
  height: 30px;
  background-color: "#fffff";
  border-radius: 2px;
  border: none;
`;

export const SelectSendDiv = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
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
`;

export const OutputText = styled.p`
  font-size: 1.2em;
  margin: 0;
  max-height: 4em;
  overflow-y: scroll;
`;

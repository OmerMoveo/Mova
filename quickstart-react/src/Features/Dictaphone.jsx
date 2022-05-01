import React, { useState, useEffect } from "react";
import { Button } from "monday-ui-components";
import Select from "./Select";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { StyledMicBtn } from "../Components/MicButton/style";
import { StyledTrashBtn } from "../Components/TrashIcon/style";
import {
  Container,
  ListenStatus,
  MicWrapper,
  OutputContainer,
  OutputText,
  SelectSendDiv,
  SendButtonStyled,
} from "./style";
import mondaySdk from "monday-sdk-js";
import { useContext } from "react";
import { AppContext } from "../context/AppState";
const monday = mondaySdk();
const Dictaphone = () => {
  const { setUserData, userData, setBoardData, boardData, selectedColumn } =
    useContext(AppContext);
  useEffect(() => {
    monday.listen("context", async (res) => {
      setUserData(res.data);
      const itemRes =
        res.data.itemIds &&
        (await monday.api(
          `query { items (ids: $itemIds) { name column_values { title text }}}`,
          {
            variables: { itemIds: res.data.itemIds[0] },
          }
        ));
      setBoardData(itemRes);
    });
  }, []);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const handleClick = async () => {
    if (!selectedColumn || !userData || !transcript) return;
    const query = `mutation changeValues($board_id: Int!, $item_id: Int, $column_id: String!, $value: JSON!) {
      change_column_value (board_id: $board_id, item_id: $item_id , column_id: $column_id, value: $value) {
        id
      } 
    }`;
    const variables = {
      board_id: userData.boardId[0],
      item_id: userData.itemIds[0],
      column_id: selectedColumn,
      value: transcript,
    };
    await monday.api(query, { variables });
  };
  const micClick = () => {
    if (!listening) {
      SpeechRecognition.startListening({ language: "en-US" });
    } else {
      SpeechRecognition.stopListening();
    }
  };
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <Container>
      <MicWrapper active={listening} onClick={micClick}>
        <StyledMicBtn />
      </MicWrapper>
      <ListenStatus active={listening}>
        {listening ? "Listening..." : "Start recording now"}
      </ListenStatus>
      <OutputContainer>
        <OutputText>{transcript}</OutputText>
        <StyledTrashBtn active={transcript} clickHandler={resetTranscript} />
      </OutputContainer>
      <SelectSendDiv>
        <Select
          options={boardData && boardData["column_values"]}
          title="Assign item"
        />
        <Button label="Update" disabled={!transcript} onClick={handleClick} />
      </SelectSendDiv>
    </Container>
  );
};
export default Dictaphone;

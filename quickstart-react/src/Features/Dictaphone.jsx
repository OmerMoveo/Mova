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
import { firstCaseUppered } from "../utils/stringUtils";
const monday = mondaySdk();
const Dictaphone = () => {
  const { setUserData, userData, setBoardData, boardData, selectedColumn } =
    useContext(AppContext);
  useEffect(() => {
    monday.listen("context", async (res) => {
      setUserData(res.data);
      const itemRes =
        (res.data.itemIds || res.data.itemId) &&
        (await monday.api(
          `query ($itemIds: [Int]) { items (ids: $itemIds) { name column_values{title text} }}`,
          {
            variables: { itemIds: res.data.itemIds || res.data.itemId },
          }
        ));
      if (itemRes) {
        setBoardData(itemRes.data.items[0]);
      }
    });
  }, []);

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const handleClick = async () => {
    try {
      if (!selectedColumn || !userData || !transcript) return;
      let query = "";
      if (
        selectedColumn === "Epic" ||
        selectedColumn === "Status" ||
        selectedColumn === "Priority"
      ) {
        query = `mutation changeValues($board_id: Int!, $item_id: Int!, $column_id: String!) {
          change_column_value (board_id: $board_id, item_id: $item_id , column_id:$column_id, value:\"{\\\"label\\\" : \\\"${firstCaseUppered(
            transcript
          )}\\\"}\"){name}
          }`;
      }
      if (selectedColumn === "Subitems") {
        query = `mutation{ create_subitem (parent_item_id: ${
          userData.itemId ? userData.itemId : userData.itemIds[0]
        }, item_name: \"${transcript}\"){ id board { id }}}`;
      }
      const variables = {
        board_id: userData.boardIds[0],
        item_id: userData.itemId ? userData.itemId : userData.itemIds[0],
        column_id: selectedColumn.toLowerCase(),
      };
      await monday.api(query, { variables });
    } catch (error) {
      console.log(error);
    }
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

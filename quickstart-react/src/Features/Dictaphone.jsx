import React, { useState } from "react";
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
import { useEffect } from "react";

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

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
          options={["First item", "Second item", "Third item"]}
          title="Assign item"
        />
        <Button label="Update" disabled={!transcript}></Button>
      </SelectSendDiv>
    </Container>
  );
};
export default Dictaphone;

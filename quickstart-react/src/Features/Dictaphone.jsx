import React from "react";
import { useState } from "react";
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
  StyledSelect,
} from "./style";
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
        {listening ? "Listening..." : "Start Recording"}
      </ListenStatus>

      <OutputContainer>
        <OutputText>{transcript}</OutputText>
        <StyledTrashBtn clickHandler={resetTranscript} />
      </OutputContainer>
      <SelectSendDiv>
        <StyledSelect>
          <option disabled selected>
            Assign item
          </option>
          <option>test1</option>
          <option>test2</option>
          <option>test3</option>
        </StyledSelect>
        <SendButtonStyled>Send</SendButtonStyled>
      </SelectSendDiv>
    </Container>
  );
};
export default Dictaphone;

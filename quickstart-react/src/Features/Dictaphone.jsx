import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useLocation, useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [code, setCode] = useState("");
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    setCode(searchParams.get("code"));
  }, []);

  useEffect(() => {
    console.log(code);
    // fetching token
    // axios
    //   .post("https://auth.monday.com/oauth2/token", {
    //     client_id: process.env.CLIENT_ID,
    //     client_sercet: process.env.CLIENT_SECRET,
    //     code: code,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
  }, [code]);

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

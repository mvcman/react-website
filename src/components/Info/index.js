import React from "react";
import {
  ImgWrap,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  //   Img,
} from "./infoElement";
import { Button } from "../buttonElement";

const Info = ({
  lightBg,
  topLine,
  id,
  darkText,
  img,
  imgStart,
  heading,
  description,
  buttonLabel,
  alt,
  lightText,
  primary,
  dark,
  dark2,
}) => {
  return (
    <InfoContainer id={id} lightBg={lightBg}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{heading}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button
                  to="/home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                  dark2={dark2 ? 1 : 0}
                >
                  {buttonLabel}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <Heading lightText={true}>Mandar</Heading>
            {/* <ImgWrap><Img src={img} alt={alt} /></ImgWrap> */}
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default Info;

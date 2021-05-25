import React from "react";
import { StyledHeader, ImageWrapper, StyledBox } from "../styles/Global.style";
import redPowerRanger from "../images/red.jpg";
import {
  KarloArticleHeader,
  KarloArticleText,
  KarloArticleWrap,
  KarloImage,
  KarloImageTwo,
  OuterWrapper,
  KontaktWrapper,
} from "../styles/Karlo.style";

export const Karlo = ({}) => {
  return (
    <div>
      <ImageWrapper>
        <img src={redPowerRanger} alt="red" height="380px" />
      </ImageWrapper>

      <StyledHeader>Karlo Balon</StyledHeader>

      <StyledBox>
        <OuterWrapper>
          <KarloArticleWrap>
            <KarloArticleHeader>Karlo Balon</KarloArticleHeader>
            <KarloArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at velit sit amet neque aliquam viverra. Fusce
              condimentum nibh ac vulputate semper. Sed eget lacus ultrices,
              mattis nulla eget, iaculis mi. Phasellus suscipit lectus ipsum,
              sed vestibulum nisi cursus quis. Mauris finibus maximus massa nec
              consequat. Sed nec tristique felis. Proin tincidunt turpis
              molestie egestas ultricies. Pellentesque vel purus lacus.
              Vestibulum placerat justo leo, vel molestie ex bibendum in.
            </KarloArticleText>
            <KarloArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at velit sit amet neque aliquam viverra. Fusce
              condimentum nibh ac vulputate semper. Sed eget lacus ultrices,
              mattis nulla eget, iaculis mi. Phasellus suscipit lectus ipsum,
              sed vestibulum nisi cursus quis. Mauris finibus maximus massa nec
              consequat.
            </KarloArticleText>
          </KarloArticleWrap>
          <KarloImage></KarloImage>
        </OuterWrapper>
        <OuterWrapper>
          <KarloImageTwo></KarloImageTwo>
          <KarloArticleWrap>
            <KarloArticleHeader>CV</KarloArticleHeader>
            <KarloArticleText>CV:</KarloArticleText>
            <KarloArticleText>Portofolio:</KarloArticleText>
            <KarloArticleHeader>Naslov:</KarloArticleHeader>
            <KarloArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at velit sit amet neque aliquam viverra. Fusce
              condimentum nibh ac vulputate semper. Sed eget lacus ultrices,
              mattis nulla eget, iaculis mi. Phasellus suscipit lectus ipsum,
              sed vestibulum nisi cursus quis. Mauris finibus maximus massa nec
              consequat.
            </KarloArticleText>
          </KarloArticleWrap>
        </OuterWrapper>
        <KontaktWrapper>
          <h2>Kontakt</h2>
          <p>LinkedIn: linkedin/karlo.com</p>
          <p>E-mail: kbalon@tvz.hr</p>
          <p>https://github.com/Karlo121</p>
        </KontaktWrapper>
      </StyledBox>
    </div>
  );
};

export default Karlo;

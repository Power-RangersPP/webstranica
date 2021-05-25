import React from "react";
import { StyledHeader, ImageWrapper, StyledBox } from "../styles/Global.style";
import pinkPowerRanger from "../images/pink.jpg";
import {
  AnjaArticleHeader,
  AnjaArticleText,
  AnjaArticleWrap,
  AnjaImage,
  AnjaImageTwo,
  OuterWrapper,
  KontaktWrapper,
} from "../styles/Anja.style";

export const Anja = ({}) => {
  return (
    <div>
      <ImageWrapper>
        <img src={pinkPowerRanger} alt="pink" height="380px" />
      </ImageWrapper>

      <StyledHeader>Anja Penić</StyledHeader>

      <StyledBox>
        <OuterWrapper>
          <AnjaArticleWrap>
            <AnjaArticleHeader>Anja Penić</AnjaArticleHeader>
            <AnjaArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at velit sit amet neque aliquam viverra. Fusce
              condimentum nibh ac vulputate semper. Sed eget lacus ultrices,
              mattis nulla eget, iaculis mi. Phasellus suscipit lectus ipsum,
              sed vestibulum nisi cursus quis. Mauris finibus maximus massa nec
              consequat. Sed nec tristique felis. Proin tincidunt turpis
              molestie egestas ultricies. Pellentesque vel purus lacus.
              Vestibulum placerat justo leo, vel molestie ex bibendumAnja
            </AnjaArticleText>
            <AnjaArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at velit sit amet neque aliquam viverra. Fusce
              condimentum nibh ac vulputate semper. Sed eget lacus ultrices,
              mattis nulla eget, iaculis mi. Phasellus suscipit lectus ipsum,
              sed vestibulum nisi cursus quis. Mauris finibus maximus massa nec
              consequat.
            </AnjaArticleText>
          </AnjaArticleWrap>
          <AnjaImage></AnjaImage>
        </OuterWrapper>
        <OuterWrapper>
          <AnjaImageTwo></AnjaImageTwo>
          <AnjaArticleWrap>
            <AnjaArticleHeader>CV</AnjaArticleHeader>
            <AnjaArticleText>CV:</AnjaArticleText>
            <AnjaArticleText>Portofolio:</AnjaArticleText>
            <AnjaArticleHeader>Naslov:</AnjaArticleHeader>
            <AnjaArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at velit sit amet neque aliquam viverra. Fusce
              condimentum nibh ac vulputate semper. Sed eget lacus ultrices,
              mattis nulla eget, iaculis mi. Phasellus suscipit lectus ipsum,
              sed vestibulum nisi cursus quis. Mauris finibus maximus massa nec
              consequat.
            </AnjaArticleText>
          </AnjaArticleWrap>
        </OuterWrapper>
        <KontaktWrapper>
          <h2>Kontakt</h2>
          <p>LinkedIn: linkedin/ivan.com</p>
          <p>E-mail: ivan@gmail.com</p>
          <p>ivan.com</p>
        </KontaktWrapper>
      </StyledBox>
    </div>
  );
};

export default Anja;

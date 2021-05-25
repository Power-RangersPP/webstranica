import React from "react";
import { StyledHeader, ImageWrapper, StyledBox } from "../styles/Global.style";
import bluePowerRanger from "../images/blueFace.jpg";
import {
  IvanArticleHeader,
  IvanArticleText,
  IvanArticleWrap,
  IvanImage,
  IvanImageTwo,
  OuterWrapper,
  KontaktWrapper,
} from "../styles/Ivan.style";

export const Ivan = ({}) => {
  return (
    <div>
      <ImageWrapper>
        <img src={bluePowerRanger} alt="blue" height="380px" />
      </ImageWrapper>

      <StyledHeader>Ivan Bardić</StyledHeader>

      <StyledBox>
        <OuterWrapper>
          <IvanArticleWrap>
            <IvanArticleHeader>Ivan Bardić</IvanArticleHeader>
            <IvanArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at velit sit amet neque aliquam viverra. Fusce
              condimentum nibh ac vulputate semper. Sed eget lacus ultrices,
              mattis nulla eget, iaculis mi. Phasellus suscipit lectus ipsum,
              sed vestibulum nisi cursus quis. Mauris finibus maximus massa nec
              consequat. Sed nec tristique felis. Proin tincidunt turpis
              molestie egestas ultricies. Pellentesque vel purus lacus.
              Vestibulum placerat justo leo, vel molestie ex bibendum in.
            </IvanArticleText>
            <IvanArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at velit sit amet neque aliquam viverra. Fusce
              condimentum nibh ac vulputate semper. Sed eget lacus ultrices,
              mattis nulla eget, iaculis mi. Phasellus suscipit lectus ipsum,
              sed vestibulum nisi cursus quis. Mauris finibus maximus massa nec
              consequat.
            </IvanArticleText>
          </IvanArticleWrap>
          <IvanImage></IvanImage>
        </OuterWrapper>
        <OuterWrapper>
          <IvanImageTwo></IvanImageTwo>
          <IvanArticleWrap>
            <IvanArticleHeader>CV</IvanArticleHeader>
            <IvanArticleText>CV:</IvanArticleText>
            <IvanArticleText>Portofolio:</IvanArticleText>
            <IvanArticleHeader>Naslov:</IvanArticleHeader>
            <IvanArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at velit sit amet neque aliquam viverra. Fusce
              condimentum nibh ac vulputate semper. Sed eget lacus ultrices,
              mattis nulla eget, iaculis mi. Phasellus suscipit lectus ipsum,
              sed vestibulum nisi cursus quis. Mauris finibus maximus massa nec
              consequat.
            </IvanArticleText>
          </IvanArticleWrap>
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

export default Ivan;

import React from "react";
import { StyledHeader, ImageWrapper, StyledBox } from "../styles/Global.style";
import yellowPowerRanger from "../images/yellow.jpg";
import {
  MatijaArticleHeader,
  MatijaArticleText,
  MatijaArticleWrap,
  MatijaImage,
  MatijaImageTwo,
  OuterWrapper,
  KontaktWrapper,
} from "../styles/Matija.style";

export const Matija = ({}) => {
  return (
    <div>
      <ImageWrapper>
        <img src={yellowPowerRanger} alt="yellow" height="380px" />
      </ImageWrapper>

      <StyledHeader>Matija Dolenec</StyledHeader>

      <StyledBox>
        <OuterWrapper>
          <MatijaArticleWrap>
            <MatijaArticleHeader>Matija Dolenec</MatijaArticleHeader>
            <MatijaArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at velit sit amet neque aliquam viverra. Fusce
              condimentum nibh ac vulputate semper. Sed eget lacus ultrices,
              mattis nulla eget, iaculis mi. Phasellus suscipit lectus ipsum,
              sed vestibulum nisi cursus quis. Mauris finibus maximus massa nec
              consequat. Sed nec tristique felis. Proin tincidunt turpis
              molestie egestas ultricies. Pellentesque vel purus lacus.
              Vestibulum placerat justo leo, vel molestie ex bibendum in.
            </MatijaArticleText>
            <MatijaArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at velit sit amet neque aliquam viverra. Fusce
              condimentum nibh ac vulputate semper. Sed eget lacus ultrices,
              mattis nulla eget, iaculis mi. Phasellus suscipit lectus ipsum,
              sed vestibulum nisi cursus quis. Mauris finibus maximus massa nec
              consequat.
            </MatijaArticleText>
          </MatijaArticleWrap>
          <MatijaImage></MatijaImage>
        </OuterWrapper>
        <OuterWrapper>
          <MatijaImageTwo></MatijaImageTwo>
          <MatijaArticleWrap>
            <MatijaArticleHeader>CV</MatijaArticleHeader>
            <MatijaArticleText>CV:</MatijaArticleText>
            <MatijaArticleText>Portofolio:</MatijaArticleText>
            <MatijaArticleHeader>Naslov:</MatijaArticleHeader>
            <MatijaArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at velit sit amet neque aliquam viverra. Fusce
              condimentum nibh ac vulputate semper. Sed eget lacus ultrices,
              mattis nulla eget, iaculis mi. Phasellus suscipit lectus ipsum,
              sed vestibulum nisi cursus quis. Mauris finibus maximus massa nec
              consequat.
            </MatijaArticleText>
          </MatijaArticleWrap>
        </OuterWrapper>
        <KontaktWrapper>
          <h2>Kontakt</h2>
          <p>LinkedIn: linkedin/matija.com</p>
          <p>E-mail: mdolenec@tvz.hr</p>
          <p>matija.com</p>
        </KontaktWrapper>
      </StyledBox>
    </div>
  );
};

export default Matija;

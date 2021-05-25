import React from "react";
import { StyledHeader, ImageWrapper, StyledBox } from "../styles/Global.style";
import blackPowerRanger from "../images/black.jpg";
import {
  LeaArticleHeader,
  LeaArticleText,
  LeaArticleWrap,
  LeaImage,
  StyledHeaderLea,
  LeaImageTwo,
  OuterWrapper,
  KontaktWrapper,
} from "../styles/Lea.style";

export const Lea = ({}) => {
  return (
    <div>
      <ImageWrapper>
        <img src={blackPowerRanger} alt="black" height="380px" />
      </ImageWrapper>

      <StyledHeaderLea>Lea Novak</StyledHeaderLea>

      <StyledBox>
        <OuterWrapper>
          <LeaArticleWrap>
            <LeaArticleHeader>Lea Novak</LeaArticleHeader>
            <LeaArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at velit sit amet neque aliquam viverra. Fusce
              condimentum nibh ac vulputate semper. Sed eget lacus ultrices,
              mattis nulla eget, iaculis mi. Phasellus suscipit lectus ipsum,
              sed vestibulum nisi cursus quis. Mauris finibus maximus massa nec
              consequat. Sed nec tristique felis. Proin tincidunt turpis
              molestie egestas ultricies. Pellentesque vel purus lacus.
              Vestibulum placerat justo leo, vel molestie ex bibendumAnja
            </LeaArticleText>
            <LeaArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at velit sit amet neque aliquam viverra. Fusce
              condimentum nibh ac vulputate semper. Sed eget lacus ultrices,
              mattis nulla eget, iaculis mi. Phasellus suscipit lectus ipsum,
              sed vestibulum nisi cursus quis. Mauris finibus maximus massa nec
              consequat.
            </LeaArticleText>
          </LeaArticleWrap>
          <LeaImage></LeaImage>
        </OuterWrapper>
        <OuterWrapper>
          <LeaImageTwo></LeaImageTwo>
          <LeaArticleWrap>
            <LeaArticleHeader>CV</LeaArticleHeader>
            <LeaArticleText>CV:</LeaArticleText>
            <LeaArticleText>Portofolio:</LeaArticleText>
            <LeaArticleHeader>Naslov:</LeaArticleHeader>
            <LeaArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at velit sit amet neque aliquam viverra. Fusce
              condimentum nibh ac vulputate semper. Sed eget lacus ultrices,
              mattis nulla eget, iaculis mi. Phasellus suscipit lectus ipsum,
              sed vestibulum nisi cursus quis. Mauris finibus maximus massa nec
              consequat.
            </LeaArticleText>
          </LeaArticleWrap>
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

export default Lea;

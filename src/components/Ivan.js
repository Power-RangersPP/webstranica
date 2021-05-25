import React from "react";
import { StyledHeader, ImageWrapper, StyledBox } from "../styles/Global.style";
import bluePowerRanger from "../images/blueFace.jpg";

export const Ivan = ({}) => {
  return (
    <div>
      <ImageWrapper>
        <img src={bluePowerRanger} alt="blue" height="380px" />
      </ImageWrapper>

      <StyledHeader>Ivan Bardić</StyledHeader>

      <StyledBox>
        <div>hello</div>
        <div>world</div>
      </StyledBox>
    </div>
  );
};

export default Ivan;

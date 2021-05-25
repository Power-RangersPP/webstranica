import React from "react";
import { StyledHeader, ImageWrapper, StyledBox } from "../styles/Global.style";
import pinkPowerRanger from "../images/pink.jpg";

export const Anja = ({}) => {
  return (
    <div>
      <ImageWrapper>
        <img src={pinkPowerRanger} alt="pink" height="380px" />
      </ImageWrapper>

      <StyledHeader>Anja Penić</StyledHeader>

      <StyledBox>
        <div>hello</div>
        <div>world</div>
      </StyledBox>
    </div>
  );
};

export default Anja;

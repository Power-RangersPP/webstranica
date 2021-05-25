import React from "react";
import { StyledHeader, ImageWrapper, StyledBox } from "../styles/Global.style";
import redPowerRanger from "../images/red.jpg";

export const Karlo = ({}) => {
  return (
    <div>
      <ImageWrapper>
        <img src={redPowerRanger} alt="red" height="380px" />
      </ImageWrapper>

      <StyledHeader>Karlo Balon</StyledHeader>

      <StyledBox>
        <div>hello</div>
        <div>world</div>
      </StyledBox>
    </div>
  );
};

export default Karlo;

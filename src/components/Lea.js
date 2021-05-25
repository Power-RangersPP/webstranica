import React from "react";
import { StyledHeader, ImageWrapper, StyledBox } from "../styles/Global.style";
import blackPowerRanger from "../images/black.jpg";

export const Lea = ({}) => {
  return (
    <div>
      <ImageWrapper>
        <img src={blackPowerRanger} alt="black" height="380px" />
      </ImageWrapper>

      <StyledHeader>Lea Novak</StyledHeader>

      <StyledBox>
        <div>hello</div>
        <div>world</div>
      </StyledBox>
    </div>
  );
};

export default Lea;

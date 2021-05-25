import React from "react";
import { StyledHeader, ImageWrapper, StyledBox } from "../styles/Global.style";
import yellowPowerRanger from "../images/yellow.jpg";

export const Matija = ({}) => {
  return (
    <div>
      <ImageWrapper>
        <img src={yellowPowerRanger} alt="yellow" height="380px" />
      </ImageWrapper>

      <StyledHeader>Matija Dolenec</StyledHeader>

      <StyledBox>
        <div>hello</div>
        <div>world</div>
      </StyledBox>
    </div>
  );
};

export default Matija;

import React from "react";
import {
  StyledForm,
  StyledLabel,
  StyledCheckboxWrapper,
  StyledInput,
  StyledInputCheck,
  StyledInputWrapper,
  StyledButton,
} from "../styles/Kontakt.style";

export const Kontakt = ({}) => {
  return (
    <StyledForm>
      <StyledCheckboxWrapper>
        <StyledLabel>Ivan</StyledLabel>
        <StyledInputCheck type="checkbox"></StyledInputCheck>
        <StyledLabel>Karlo</StyledLabel>
        <StyledInputCheck type="checkbox"></StyledInputCheck>
        <StyledLabel>Anja</StyledLabel>
        <StyledInputCheck type="checkbox"></StyledInputCheck>
        <StyledLabel>Lea</StyledLabel>
        <StyledInputCheck type="checkbox"></StyledInputCheck>
        <StyledLabel>Matija</StyledLabel>
        <StyledInputCheck type="checkbox"></StyledInputCheck>
      </StyledCheckboxWrapper>
      <StyledInputWrapper>
        <StyledInput type="text" placeholder="Ime"></StyledInput>
        <StyledInput type="text" placeholder="Prezime"></StyledInput>
        <StyledInput type="email" placeholder="Email"></StyledInput>
        <StyledInput type="text" placeholder="Predmet"></StyledInput>

        <StyledInput
          type="textarea"
          style={{ height: "150px", width: "300px" }}
        ></StyledInput>
        <StyledButton type="submit">Confirm</StyledButton>
      </StyledInputWrapper>
    </StyledForm>
  );
};

export default Kontakt;

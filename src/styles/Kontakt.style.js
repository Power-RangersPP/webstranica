import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 0 auto;
  width: 450px;
`;

export const StyledCheckboxWrapper = styled.form`
  height: 40px;
  margin-left: 55px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
`;

export const StyledLabel = styled.form`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  align-self: center;
`;

export const StyledInput = styled.input`
  width: 250px;
  height: 30px;
  margin-top: 10px;
  align-self: center;

  :focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid rgba(81, 203, 238, 1);
  }
`;

export const StyledInputCheck = styled.input`
  height: 40px;
  border-radius: 3px;
  margin-top: 10px;
  align-self: center;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  align-content: center;
  padding: 5px;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  height: 40px;
  color: white;
  background-color: #99bff9;
  border: 1px solid white;
  font-weight: 600px;
  border-radius: 20px;
  margin-top: 30px;
  :hover {
    background-color: white;
    border: 1px solid #99bff9;
    color: #99bff9;
  }
`;

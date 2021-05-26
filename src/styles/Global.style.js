import styled from "styled-components";

export const StyledHeader = styled.h1`
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

export const ImageWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const StyledBox = styled.div`
  background-color: #f0f0f0;
  width: 80%;
  margin: 0 auto;
  height: 1000px;
  margin-top: 30px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 15px;
  padding: 50px;
  padding-bottom: 130px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 1450px) {
    height: 1800px;
  }
  @media (max-width: 1000px) {
    width: 70%;
    height: 2300px;
  }
`;

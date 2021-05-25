import styled from "styled-components";
import leaImg from "../images/backgrounds/leaslika1.jpg";
import leaImg2 from "../images/backgrounds/leaslika2.jpg";

export const StyledHeader = styled.h1`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: white;
`;

export const ImageWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const LeaArticleWrap = styled.div`
  display: flex;
  height: 400px;
  width: 600px;
  border-radius: 15px;
  margin-bottom: 50px;
  flex-direction: column;
  background-color: #C6C9D2;
  box-shadow: 3px 3px 5px 6px #ccc;
  overflow: auto;
`;

export const LeaArticleHeader = styled.h1`
  text-align: center;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
  margin-top: 15px;
`;

export const StyledHeaderLea = styled.h1`
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: yellow;
`;

export const LeaArticleText = styled.h1`
  font-size: 15px;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
`;

export const LeaImage = styled.div`
  display: flex;
  height: 400px;
  width: 500px;
  border-radius: 15px;
  margin-left: 50px;
  justify-content: space-evenly;
  margin-bottom: 10px;
  background-image: url(${leaImg});
  background-size: cover;
  box-shadow: 3px 3px 5px 6px #ccc;
`;

export const LeaImageTwo = styled.div`
  display: flex;
  height: 400px;
  width: 500px;
  border-radius: 15px;
  justify-content: space-evenly;
  margin-bottom: 10px;
  margin-right: 50px;
  background-image: url(${leaImg2});
  background-size: cover;
  box-shadow: 3px 3px 5px 6px #ccc;
`;

export const OuterWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const KontaktWrapper = styled.div`
  text-align: center;
  width: 600px;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
`;

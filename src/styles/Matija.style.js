import styled from "styled-components";
import matijaImg from "../images/backgrounds/matijaslika1.jpg";
import matijaImg2 from "../images/backgrounds/matijaslika2.jpg";

export const StyledHeader = styled.h1`
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

export const ImageWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const MatijaArticleWrap = styled.div`
  display: flex;
  height: 400px;
  width: 600px;
  border-radius: 15px;
  margin-bottom: 50px;
  flex-direction: column;
  background-color: #ffe36e;
  box-shadow: 3px 3px 5px 6px #ccc;
  overflow: auto;
  @media (max-width: 1450px) {
    width: 100%;
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin-right: 0px;
    box-shadow: none;
    height: 550px;
  }
`;

export const MatijaArticleHeader = styled.h1`
  text-align: center;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
  margin-top: 15px;
`;

export const MatijaArticleText = styled.h1`
  font-size: 15px;
  padding: 10px;
  font-family: "Montserrat", sans-serif;
`;

export const MatijaImage = styled.div`
  display: flex;
  height: 400px;
  width: 500px;
  border-radius: 15px;
  margin-left: 50px;
  justify-content: space-evenly;
  margin-bottom: 10px;
  background-image: url(${matijaImg});
  background-size: cover;
  box-shadow: 3px 3px 5px 6px #ccc;
  @media (max-width: 1450px) {
    width: 100%;
    margin-left: 0px;
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const MatijaImageTwo = styled.div`
  display: flex;
  height: 400px;
  width: 500px;
  border-radius: 15px;
  justify-content: space-evenly;
  margin-bottom: 10px;
  margin-right: 50px;
  background-image: url(${matijaImg2});
  background-size: cover;
  box-shadow: 3px 3px 5px 6px #ccc;
  @media (max-width: 1450px) {
    width: 100%;
    margin-right: 0px;
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin-right: 0px;
  }
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
  font-family: "Montserrat", sans-serif;
`;

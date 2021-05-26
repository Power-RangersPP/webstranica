import styled from "styled-components";
import bardicImg from "../images/backgrounds/mansleeping.jpg";
import bardicImg2 from "../images/backgrounds/manvaping.jpg";

export const StyledHeader = styled.h1`
  text-align: center;
  font-family: "Montserrat", sans-serif;
`;

export const ImageWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const IvanArticleWrap = styled.div`
  display: flex;
  height: 400px;
  width: 600px;
  border-radius: 15px;
  margin-bottom: 50px;
  flex-direction: column;
  background-color: #99bff9;
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

export const IvanArticleHeader = styled.h1`
  text-align: center;
  margin: 0 auto;
  margin-top: 15px;
  font-family: "Montserrat", sans-serif;
`;

export const IvanArticleText = styled.h1`
  font-size: 15px;
  padding: 10px;
  font-family: "Montserrat", sans-serif;
`;

export const IvanImage = styled.div`
  display: flex;
  height: 400px;
  width: 500px;
  border-radius: 15px;
  margin-left: 50px;
  justify-content: space-evenly;
  margin-bottom: 10px;
  background-image: url(${bardicImg});
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

export const IvanImageTwo = styled.div`
  display: flex;
  height: 400px;
  width: 500px;
  border-radius: 15px;
  justify-content: space-evenly;
  margin-bottom: 10px;
  margin-right: 50px;
  background-image: url(${bardicImg2});
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

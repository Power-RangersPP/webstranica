import styled from "styled-components";
import bardicImg from "../images/backgrounds/mansleeping.jpg";
import bardicImg2 from "../images/backgrounds/manvaping.jpg";

export const StyledHeader = styled.h1`
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  color: white;
`;

export const ImageWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const IvanArticleWrap = styled.div`
  display: flex;
  height: 400px;
  width: 500px;
  border-radius: 15px;
  margin-bottom: 30px;
  flex-direction: column;
  background-color: #6e9efe;
  box-shadow: 3px 3px 5px 6px #ccc;
  overflow: auto;
`;

export const IvanArticleHeader = styled.h1`
  text-align: center;
  margin: 0 auto;
  color: white;
  margin-top: 15px;
`;

export const IvanArticleText = styled.h1`
  font-size: 15px;
  padding: 10px;
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
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
  box-shadow: 3px 3px 5px 6px #ccc;
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
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

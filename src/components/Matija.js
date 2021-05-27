import React from "react";
import { StyledHeader, ImageWrapper, StyledBox } from "../styles/Global.style";
import yellowPowerRanger from "../images/yellow.jpg";
import {
  MatijaArticleHeader,
  MatijaArticleText,
  MatijaArticleWrap,
  MatijaImage,
  MatijaImageTwo,
  OuterWrapper,
  KontaktWrapper,
} from "../styles/Matija.style";

export const Matija = ({}) => {
  return (
    <div>
      <ImageWrapper>
        <img src={yellowPowerRanger} alt="yellow" height="380px" />
      </ImageWrapper>

      <StyledHeader>Matija Dolenec</StyledHeader>

      <StyledBox>
        <OuterWrapper>
          <MatijaArticleWrap>
            <MatijaArticleHeader>Matija Dolenec</MatijaArticleHeader>
            <MatijaArticleText>
            Pozdrav! Zovem se Matija i student sam druge godine na Tehničkom Veleučilištu u Zagrebu – smjer Elektroničko poslovanje. Završio sam obrtničku školu u Koprivnici i po struci sam elektrotehničar. Usavršio sam svoje znanje elektrotehnike na institutu MIC Velenje putem Erasmus+ programa. Elektroničko poslovanje sam upisao iz znatiželje prema ekonomiji i već prisutnoj ljubavi prema informatici. Nadam se da ću svoje obrazovanje moći nastaviti i izvan lijepe naše te time proširiti vidike. 
            </MatijaArticleText>
            <MatijaArticleText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at velit sit amet neque aliquam viverra. Fusce
              condimentum nibh ac vulputate semper. Sed eget lacus ultrices,
              mattis nulla eget, iaculis mi. Phasellus suscipit lectus ipsum,
              sed vestibulum nisi cursus quis. Mauris finibus maximus massa nec
              consequat.
            </MatijaArticleText>
          </MatijaArticleWrap>
          <MatijaImage></MatijaImage>
        </OuterWrapper>
        <OuterWrapper>
          <MatijaImageTwo></MatijaImageTwo>
          <MatijaArticleWrap>
            <MatijaArticleHeader>CV</MatijaArticleHeader>
            <MatijaArticleText>CV: https://europa.eu/!ut67Jq</MatijaArticleText>
            <MatijaArticleText>Portofolio:</MatijaArticleText>
            <MatijaArticleHeader>Naslov:</MatijaArticleHeader>
            <MatijaArticleText>
            Osim informatike, izrazito volim fotografiju i sve vezano uz vizualne oblike umjetnosti. Fotografija je  jedan od hobija koji omogućuju dinamičan život pun neočekivanih avantura.  U svojoj amaterskoj fotografskoj karijeri sam upoznao i fotografirao mnogo poznatih osoba iz hrvatske i inozemstva. 
            </MatijaArticleText>
          </MatijaArticleWrap>
        </OuterWrapper>
        <KontaktWrapper>
          <h2>Kontakt</h2>
          
          <p>E-mail: mdolenec@tvz.hr</p>
          
        </KontaktWrapper>
      </StyledBox>
    </div>
  );
};

export default Matija;

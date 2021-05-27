import React from "react";
import { StyledHeader, ImageWrapper, StyledBox } from "../styles/Global.style";
import bluePowerRanger from "../images/blueFace.jpg";
import {
  IvanArticleHeader,
  IvanArticleText,
  IvanArticleWrap,
  IvanImage,
  IvanImageTwo,
  OuterWrapper,
  KontaktWrapper,
} from "../styles/Ivan.style";

export const Ivan = ({}) => {
  return (
    <div>
      <ImageWrapper>
        <img src={bluePowerRanger} alt="blue" height="380px" />
      </ImageWrapper>

      <StyledHeader>Ivan Bardić</StyledHeader>

      <StyledBox>
        <OuterWrapper>
          <IvanArticleWrap>
            <IvanArticleHeader>Ivan Bardić</IvanArticleHeader>
            <IvanArticleText>
              Pozdrav, moje ime je Ivan i redovan sam student Informatičkog
              odjela na TVZ-u. Nakon naporne prve godine na odjelu
              Elektrotehnike shvatio sam da sam u potpunosti promašio smjer te
              da to nije za mene, nakon čega sam se s nekoliko kolega sličnih
              interesa prebacio na Elektroničko poslovanje. Iako zadovoljan
              promjenom i dalje nisam siguran u kojem smjeru će ići moje daljnje
              obrazovanje, te mi je željena karijera u magli. Završio sam
              Srednju školu Jelkovec te radi sigurnosti ostao u struci iako
              poslovi koje sam radio ne mogu biti dalje od toga. Uz početak
              studiranja na E-poslovanju radio sam kao podrška u jednoj
              telekomunikacijskoj tvrtki, a sezonski kao ugostitelj u Beach
              baru. Otkako je došao Covid  19 i poremetio planove početkom druge
              godine sam isključivo na online predavanjima.
            </IvanArticleText>
            <IvanArticleText style={{ textAlign: "center" }}>
              <a href="https://europa.eu/!QR74Dw">CV</a>
            </IvanArticleText>
          </IvanArticleWrap>
          <IvanImage></IvanImage>
        </OuterWrapper>
        <OuterWrapper>
          <IvanImageTwo></IvanImageTwo>
          <IvanArticleWrap>
            <IvanArticleHeader>CV</IvanArticleHeader>
            <IvanArticleText>CV:</IvanArticleText>
            <IvanArticleText>Portofolio:</IvanArticleText>
            <IvanArticleHeader>Naslov:</IvanArticleHeader>
            <IvanArticleText>
              Slobodno vrijeme najčešće provodim gledajući serije ili igrajući
              video igre. Kad skupim volje ponekad isprobam nešto novo kao video
              editing ili se dosađujem u Photoshopu. Osim hobija kod kuće,
              uživam u planinarenju, te volim tabletop igre i bespotrebno trošit
              novce skupljajući nove dvotjedne zanimacije.
            </IvanArticleText>
          </IvanArticleWrap>
        </OuterWrapper>
        <KontaktWrapper>
          <h2>Kontakt</h2>
          <p>E-mail: ivan.bardic@tvz.hr</p>
        </KontaktWrapper>
      </StyledBox>
    </div>
  );
};

export default Ivan;

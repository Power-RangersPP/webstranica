import React from "react";
import { StyledHeader, ImageWrapper, StyledBox } from "../styles/Global.style";
import pinkPowerRanger from "../images/pink.jpg";
import {
  AnjaArticleHeader,
  AnjaArticleText,
  AnjaArticleWrap,
  AnjaImage,
  AnjaImageTwo,
  OuterWrapper,
  KontaktWrapper,
} from "../styles/Anja.style";

export const Anja = ({}) => {
  return (
    <div>
      <ImageWrapper>
        <img src={pinkPowerRanger} alt="pink" height="380px" />
      </ImageWrapper>

      <StyledHeader>Anja Penić</StyledHeader>

      <StyledBox>
        <OuterWrapper>
          <AnjaArticleWrap>
            <AnjaArticleHeader>Anja Penić</AnjaArticleHeader>
            <AnjaArticleText>
              Pozdrav 😊 Moje ime je Anja i vanredna sam studentica druge godine
              Elektroničkog poslovanja. Faks sam upisala nešto kasnije od većine
              kolega – sa 27 godina. Nakon što sam završila gimnaziju u Čakovcu,
              upisala sam Engleski i Švedski jezik na FFZG ali se u tome na
              kraju nisam pronašla i nakon nekoliko godina sam odustala i
              odlučila raditi. Kako mi je velika želja bila razviti karijeru u
              IT sektoru, pala je odluka da upišem informatiku na TVZ-u i evo me
              ovdje. U početku studija sam radila ujutro u restoranu, popodne
              išla na predavanja a navečer učila, ali ubrzo se sve to isplatilo
              i već na drugoj godini sam se zaposlila u struci – u Microblinku.
              Sada radim kao Mobile Support Specialist, odnosno pružam podršku
              mobile developerima pri integraciji Microblinkovih proizvoda te
              surađujem sa timovima iz prodaje i marketinga u komunikaciji sa
              klijentima.
            </AnjaArticleText>
            <AnjaArticleText style={{ textAlign: "center" }}>
              <a href="https://europa.eu/!cC33Bw">CV</a>
            </AnjaArticleText>
          </AnjaArticleWrap>
          <AnjaImage></AnjaImage>
        </OuterWrapper>
        <OuterWrapper>
          <AnjaImageTwo></AnjaImageTwo>
          <AnjaArticleWrap>
            <AnjaArticleHeader>Interesi:</AnjaArticleHeader>
            <AnjaArticleText>
              Slobodno vrijeme najviše volim provoditi u prirodi, planinarim i
              vozim cestovni bicikl na duge staze. Kad vremenske prilike to ne
              dopuštaju, doma eksperimentiram sa kuhanjem i pečenjem sourdough
              kruha. Također, obožavam putovati, a omiljene destinacije su mi
              Španjolska u kojoj sam obišla više gradova te moj omiljeni grad
              koji sam posjetila nekoliko puta – Berlin, zbog najboljeg noćnog
              života i urbane kulture.
            </AnjaArticleText>
          </AnjaArticleWrap>
        </OuterWrapper>
        <KontaktWrapper>
          <h2>Kontakt</h2>

          <p>E-mail: apenic@tvz.hr</p>
        </KontaktWrapper>
      </StyledBox>
    </div>
  );
};

export default Anja;

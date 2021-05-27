import React from "react";
import { StyledHeader, ImageWrapper, StyledBox } from "../styles/Global.style";
import redPowerRanger from "../images/red.jpg";

import {
  KarloArticleHeader,
  KarloArticleText,
  KarloArticleWrap,
  KarloImage,
  KarloImageTwo,
  OuterWrapper,
  KontaktWrapper,
} from "../styles/Karlo.style";

export const Karlo = ({}) => {
  return (
    <div>
      <ImageWrapper>
        <img src={redPowerRanger} alt="red" height="380px" />
      </ImageWrapper>

      <StyledHeader>Karlo Balon</StyledHeader>

      <StyledBox>
        <OuterWrapper>
          <KarloArticleWrap>
            <KarloArticleHeader>O meni</KarloArticleHeader>
            <KarloArticleText style={{ fontSize: "15px" }}>
              Zdravo, ja sam Karlo i redovni sam student TVZ-a na smjeru
              Elektroničko Poslovanje. Prije toga sam bio učenik Prve Tehničke
              Škole Tesle koju sam pohađao smjer Elektrotehničar i nakon srednje
              škole mislio sam da je to idalje usmjerenje koje me zanima, no
              nakon par tjedana odustao sam od te ideje i odlučio se prebaciti
              na Informatiku.
            </KarloArticleText>
            <KarloArticleText style={{ fontSize: "15px" }}>
              Zbog svoje ljubavi prema knjigama radio sam par godina u knjižari
              Znanje, nakon što je počela pandemija sam prisiljen biti doma i tu
              priliku sam iskoristio. Pri kraju prošle godine sudjelovao sam na
              jednom startup projektu za IT firmu i tada sam odlučio, da barem u
              bliskoj budućnosti želim biti web developer. Od tada učim razne
              tehnologije i radim razne stranice.
            </KarloArticleText>
            <KarloArticleText style={{ textAlign: "center" }}>
              <a href="../files/KarloBalon.pdf" download>
                CV Download
              </a>
            </KarloArticleText>
          </KarloArticleWrap>
          <KarloImage></KarloImage>
        </OuterWrapper>
        <OuterWrapper>
          <KarloImageTwo></KarloImageTwo>
          <KarloArticleWrap>
            <KarloArticleHeader>Interesi</KarloArticleHeader>
            <KarloArticleText style={{ fontSize: "20px" }}>
              U slobodno vrijeme volim čitati, programirati te igrati video
              igre. Najdraže igrice su mi sim-racing igrice zbog moje ljubavi
              prema autima koji brzo voze u krug. No nažalost nisam u njima
              dobar kolko bi htio biti. Jedan dan... Volim gledati Formulu 1 te
              također volim nogomet, odnosno Liverpool FC kojeg pratim od malih
              nogu iz razloga kojih se više ne sjećam.
            </KarloArticleText>
          </KarloArticleWrap>
        </OuterWrapper>
        <KontaktWrapper>
          <h2>Kontakt</h2>
          <p>LinkedIn: linkedin/karlo.com</p>
          <p>E-mail: kbalon@tvz.hr</p>
          <p>https://github.com/Karlo121</p>
        </KontaktWrapper>
      </StyledBox>
    </div>
  );
};

export default Karlo;

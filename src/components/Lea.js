import React from "react";
import { StyledHeader, ImageWrapper, StyledBox } from "../styles/Global.style";
import blackPowerRanger from "../images/black.jpg";
import {
  LeaArticleHeader,
  LeaArticleText,
  LeaArticleWrap,
  LeaImage,
  StyledHeaderLea,
  LeaImageTwo,
  OuterWrapper,
  KontaktWrapper,
} from "../styles/Lea.style";

export const Lea = ({}) => {
  return (
    <div>
      <ImageWrapper>
        <img src={blackPowerRanger} alt="black" height="380px" />
      </ImageWrapper>

      <StyledHeaderLea>Lea Novak</StyledHeaderLea>

      <StyledBox>
        <OuterWrapper>
          <LeaArticleWrap>
            <LeaArticleHeader>Lea Novak</LeaArticleHeader>
            <LeaArticleText style={{ fontSize: "18px" }}>
              Pozdrav, moje ime je Lea, imam 20 godina i studiram Elektroničko
              poslovanje na Tehničkom veleučilištu u Zagrebu. Odrasla sam u
              malom selu Sv. Urban na sjeveru Hrvatske te je tu utemeljena moja
              ljubav prema prirodi. Od malena sam majci znala pomagati kod
              pečenja kolača te me ni ta ljubav nije ostavila, samo je pitanje
              motivacije.😄 Jedini smjer koji me nakon osnovne škole privlačio
              je Web dizajn koji sam i završila u Graditeljskoj školi Čakovec.
              Iskustva u IT industriji još nemam, ali sam radila na sezoni u
              restoranu Orijent u Štrigovi i u Poreču kao prodavačica sladoleda
              u kampu.
            </LeaArticleText>
            <LeaArticleText style={{ textAlign: "center", fontSize: "22px" }}>
              <a href="https://europa.eu/!pf83yb"> CV </a>
            </LeaArticleText>
          </LeaArticleWrap>
          <LeaImage></LeaImage>
        </OuterWrapper>
        <OuterWrapper>
          <LeaImageTwo></LeaImageTwo>
          <LeaArticleWrap>
            <LeaArticleHeader>Interesi:</LeaArticleHeader>
            <LeaArticleText style={{ fontSize: "22px" }}>
              Ako bi se stavili na mjesto mojih prijatelja znali bi da većinu
              slobodnog vremena provodim čitajući knjige, od kojih mi je
              omiljena the Dune series, i gledajući RuPaul’s Drag Race. Također
              bi znali da volim crtati (tradicionalno i digitalno) i da je Adobe
              Illustrator moj najbolji prijatelj.
            </LeaArticleText>
          </LeaArticleWrap>
        </OuterWrapper>
        <KontaktWrapper>
          <h2>Kontakt</h2>

          <p>E-mail: lea.novak@tvz.hr</p>
        </KontaktWrapper>
      </StyledBox>
    </div>
  );
};

export default Lea;

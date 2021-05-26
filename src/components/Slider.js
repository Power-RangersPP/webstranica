import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  StyledIvan,
  StyledKarlo,
  StyledAnja,
  StyledLea,
  StyledMatija,
} from "../styles/Slider.style";
import Karlo from "./Karlo";
import Ivan from "./Ivan";
import Anja from "./Anja";
import Lea from "./Lea";
import Matija from "./Matija";
import {
  NavLink,
  Nav,
  Bars,
  NavMenu,
  KontaktForma,
  Wrap,
  IvanWrap,
  KarloWrap,
  AnjaWrap,
  LeaWrap,
  MatijaWrap,
} from "../styles/Navbar.style";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

class Slider extends React.Component {
  state = { additionalTransfrom: 0 };
  render() {
    return (
      <div>
        <div>
          <Wrap>
            <Nav>
              <NavMenu>
                <IvanWrap>
                  <NavLink
                    hoverStyle={{ "box-shadow": "inset 0 -5px 0 #C6C9D2" }}
                    onClick={() => {
                      this.Carousel.goToSlide(2);
                      document.getElementById("kontakt").style.backgroundColor =
                        "rgba(153, 191, 249, 1)";
                      console.log(this.Carousel.state.currentSlide);
                    }}
                  >
                    Ivan
                  </NavLink>
                </IvanWrap>
                <KarloWrap>
                  <NavLink
                    onClick={() => {
                      this.Carousel.goToSlide(3);
                      document.getElementById("kontakt").style.backgroundColor =
                        "rgba(255, 0, 0, 0.7)";
                    }}
                  >
                    Karlo
                  </NavLink>
                </KarloWrap>
                <AnjaWrap>
                  <NavLink
                    onClick={() => {
                      this.Carousel.goToSlide(4);
                      document.getElementById("kontakt").style.backgroundColor =
                        "rgba(236, 91, 158, 0.6)";
                    }}
                  >
                    Anja
                  </NavLink>
                </AnjaWrap>
                <LeaWrap>
                  <NavLink
                    onClick={() => {
                      this.Carousel.goToSlide(5);
                      document.getElementById("kontakt").style.backgroundColor =
                        "rgba(0, 0, 0, 0.7)";
                      document.getElementById("kontakt").style.color = "white";
                    }}
                  >
                    Lea
                  </NavLink>
                </LeaWrap>
                <MatijaWrap>
                  <NavLink
                    onClick={() => {
                      this.Carousel.goToSlide(6);
                      document.getElementById("kontakt").style.backgroundColor =
                        "rgba(255, 255, 0, 0.4)";
                      document.getElementById("kontakt").style.color = "black";
                    }}
                  >
                    Matija
                  </NavLink>
                </MatijaWrap>
                <KontaktForma id="kontakt">Forma za kontakt</KontaktForma>
              </NavMenu>
              <Bars />
            </Nav>
          </Wrap>
        </div>
        <div>
          <Carousel
            arrows={false}
            swipeable={true}
            draggable={true}
            responsive={responsive}
            autoPlaySpeed={1000}
            infinite={true}
            ref={(el) => (this.Carousel = el)}
            keyBoardControl={true}
            customTransition="all 0.5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-padding-40-px"
          >
            <StyledIvan>
              <Ivan />
            </StyledIvan>
            <StyledKarlo>
              <Karlo />
            </StyledKarlo>
            <StyledAnja>
              <Anja />
            </StyledAnja>
            <StyledLea>
              <Lea />
            </StyledLea>
            <StyledMatija>
              <Matija />
            </StyledMatija>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Slider;

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
    const { deviceType } = this.props;
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
                    }}
                  >
                    Ivan
                  </NavLink>
                </IvanWrap>
                <KarloWrap>
                  <NavLink
                    onClick={() => {
                      this.Carousel.goToSlide(3);
                    }}
                  >
                    Karlo
                  </NavLink>
                </KarloWrap>
                <AnjaWrap>
                  <NavLink
                    onClick={() => {
                      this.Carousel.goToSlide(4);
                    }}
                  >
                    Anja
                  </NavLink>
                </AnjaWrap>
                <LeaWrap>
                  <NavLink
                    onClick={() => {
                      this.Carousel.goToSlide(5);
                    }}
                  >
                    Lea
                  </NavLink>
                </LeaWrap>
                <MatijaWrap>
                  <NavLink
                    onClick={() => {
                      this.Carousel.goToSlide(6);
                    }}
                  >
                    Matija
                  </NavLink>
                </MatijaWrap>
                <KontaktForma>Forma za kontakt</KontaktForma>
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

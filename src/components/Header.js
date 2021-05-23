import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  StyledIvan,
  StyledKarlo,
  StyledAnja,
  StyledLea,
  StyledMatija,
} from "../styles/Header.style";
import Karlo from "../components/Karlo";
import Ivan from "../components/Ivan";
import Anja from "../components/Anja";
import Lea from "../components/Lea";
import Matija from "../components/Matija";

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

export const Header = ({}) => {
  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        autoPlaySpeed={1000}
        infinite={true}
        keyBoardControl={true}
        customTransition="all .1"
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
  );
};

export default Header;

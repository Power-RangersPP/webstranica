import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.nav`
  background: #f0f0f0;
  height: 50px;
  display: flex;
  justify-content: center;
  z-index: 10;
`;

export const NavLink = styled.a`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  border-bottom: 5px solid transparent;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 20px;
    padding: 0 1rem;
  }
`;

export const KontaktForma = styled.a`
  background-color: #99bff9;
  width: auto;
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  margin-left: 1em;
  height: 95%;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid transparent;
  border-radius: 10px 10px 0px 0px;

  @media screen and (max-width: 886px) and (min-width: 769px) {
    font-size: 15px;
    padding: 0 1rem;
    /*Font fix*/
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 20px;
    padding: 0 1rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0 2rem;
    margin-right: 10%;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #747474;
  @media screen and (max-width: 768px) {
    display: block;
    position: inherit;
    top: 1;
    left: 1;
    transform: translate(-120%, 40%);
    font-size: 1.8rem;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Wrap = styled.div`
  padding-top: 2em;
`;

export const IvanWrap = styled.div`
  :hover {
    box-shadow: inset 0 -5px 0 rgb(0, 73, 162);
  }
`;

export const KarloWrap = styled.div`
  :hover {
    box-shadow: inset 0 -5px 0 rgb(199, 18, 27);
  }
`;

export const AnjaWrap = styled.div`
  :hover {
    box-shadow: inset 0 -5px 0 rgb(236, 91, 158);
  }
`;

export const LeaWrap = styled.div`
  :hover {
    box-shadow: inset 0 -5px 0 black;
  }
`;

export const MatijaWrap = styled.div`
  :hover {
    box-shadow: inset 0 -5px 0 rgb(255, 245, 0);
  }
`;

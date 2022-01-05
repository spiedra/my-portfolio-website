import { useState } from "react";
import styled, { css } from "styled-components";
import NavBarButton from "./NavBarButton";
import NavbarElement from "./NavbarElement";
import SocialMediaBox from "./SocialMediaBox";

const navbarElements = [
  { key: 1, route: "/", text: "About me" },
  { key: 2, route: "/", text: "Skills" },
  { key: 3, route: "/", text: "Projects" },
  { key: 4, route: "/", text: "Contact" },
];

const listNavbarElements = navbarElements.map((element) => (
  <NavbarElement
    key={element.key}
    children={{ route: element.route, text: element.text }}
  />
));

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: transparent;
  position: fixed;
  z-index: 500;
  box-shadow: 0 2px 15px var(--nav-box-shadow);
  transform: translate(0);
  transition: all 0.2s ease-out;
  background-color: var(--h-backgroud);
`;

const NavMenu = styled.ul`
  display: none;

  @media ${(props) => props.theme.bp.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    width: auto;
  }
`;

const NavMenuMobile = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 104%;
  left: 0;
  right: 0;
  background-color: var(--h-backgroud);
  opacity: 0;
  transform: translateY(-20%);
  transition: 0.4s;
  pointer-events: none;
  font-size: 28px;
  padding-bottom: 10px;
  box-shadow: 0 4px 7px -2px var(--nav-box-shadow);
  padding: 0;
  margin: 0;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      transform: translateY(-1%);
      pointer-events: auto;
    `}

  @media ${(props) => props.theme.bp.tablet} {
    display: none;
  }
`;

const Logo = styled.a`
  padding: 1rem 2rem;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.775rem;

  span {
    font-weight: 300;
    font-size: 1.375rem;
  }

  @media ${(props) => props.theme.bp.mobileS} {
    font-size: 1.6rem;

    span {
      font-size: 1.2rem;
    }
  }

  @media ${(props) => props.theme.bp.mobileM} {
    font-size: 1.775rem;

    span {
      font-size: 1.375rem;
    }
  }

  @media ${(props) => props.theme.bp.tablet} {
    font-size: 1.7rem;

    span {
      font-size: 1.3rem;
    }
  }

  @media ${(props) => props.theme.bp.laptop} {
    font-size: 2.2rem;

    span {
      font-size: 1.6rem;
    }
  }
`;

const SocialMenu = styled.ul`
  margin-top: 10px;
  flex-direction: row;
  justify-content: center;
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo href="/">
        JC<span>Spiedra</span>
      </Logo>
      <NavBarButton isOpen={isOpen} handleSubmit={() => setIsOpen(!isOpen)} />
      <NavMenu>{listNavbarElements}</NavMenu>
      <NavMenuMobile isOpen={isOpen}>
        {listNavbarElements}
        <SocialMediaBox />
      </NavMenuMobile>
    </Nav>
  );
}

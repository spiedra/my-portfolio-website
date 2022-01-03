import { useState } from "react";
import styled, { css } from "styled-components";
import NavBarButton from "./NavBarButton";
import NavbarElement from "./NavbarElement";

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
  height: 4.6875rem;
  position: fixed;
  z-index: 500;
  box-shadow: 0 2px 15px var(--nav-box-shadow);
  transform: translate(0);
  transition: all 0.2s ease-out;
  background-color: var(--h-backgroud);
`;

const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: max-height 0.3s ease-in;
  max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  overflow: hidden;
  padding: 0;
  margin-top: 0;
  background-color: var(--h-backgroud);
  box-shadow: 0 4px 2px -2px var(--nav-box-shadow);

  @media ${(props) => props.theme.bp.tablet} {
    flex-direction: row;
    width: auto;
    padding: 2rem 0rem;
    transition: none;
    margin: 0;
    max-height: 0;
    box-shadow: none;
  }

  @media ${(props) => props.theme.bp.laptop} {
    flex-direction: row;
    width: auto;
    padding: 2rem 3rem;
    margin: 0;
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
      <NavMenu isOpen={isOpen}>
        {listNavbarElements}
        {/* <SocialMenu>
          <li>
            <a>GitHub</a>
          </li>
        </SocialMenu> */}
      </NavMenu>
    </Nav>
  );
}

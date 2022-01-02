import { useState } from "react";
import styled from "styled-components";
import NavBarButton from "./NavBarButton";
import NavbarElement from "./NavbarElement";

const navbarElements = [
  { key: 1, route: "/", text: "Inicio" },
  { key: 2, route: "/about", text: "Sobre nosotros" },
  { key: 3, route: "/", text: "Servicios" },
  { key: 4, route: "/", text: "Galería" },
  { key: 5, route: "/", text: "Contacto" },
];

const listNavbarElements = navbarElements.map((element) => (
  <NavbarElement
    key={element.key}
    children={{ route: element.route, text: element.text }}
  />
));

const Nav = styled.nav`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: transparent;
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  list-style: none;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <Nav>
      <Logo href="">
        JC<span>Spiedra</span>
      </Logo>
      <NavBarButton isOpen={isOpen} handleSubmit={handleSubmit} />
      <NavMenu isOpen={isOpen}>{listNavbarElements}</NavMenu>
    </Nav>
  );
}

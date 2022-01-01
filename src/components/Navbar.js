import styled from "styled-components";
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavMenu = styled.ul`
  list-style: none;
`;

export default function Navbar() {
  return (
    <Nav>
      <NavMenu>{listNavbarElements}</NavMenu>
    </Nav>
  );
}

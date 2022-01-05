import Link from "next/link";
import styled from "styled-components";

const navbarElements = [
  { route: "/", text: "About me" },
  { route: "/", text: "Skills" },
  { route: "/", text: "Projects" },
  { route: "/", text: "Contact" },
];

const NavItem = styled.li``;

const NavLink = styled.a``;

const listNavbarElements = navbarElements.map((element, index) => (
  <NavItem key={index}>
    <NavLink>{element.text}</NavLink>
  </NavItem>
));

export default function SocialMediaBox() {
  return <>{listNavbarElements}</>;
}

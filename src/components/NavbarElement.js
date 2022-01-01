import Link from "next/link";
import styled from "styled-components";

const NavItem = styled.li``;

const NavLink = styled.a``;

export default function NavbarElement({ children }) {
  return (
    <NavItem>
      <Link href={children.route}>
        <NavLink>{children.text}</NavLink>
      </Link>
    </NavItem>
  );
}

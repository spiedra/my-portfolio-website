import Link from "next/link";
import styled from "styled-components";

const NavItem = styled.li``;

const NavLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #67bc98;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  
  &:hover {
    color: #7b7fda;
  }
`;

export default function NavbarElement({ children }) {
  return (
    <NavItem>
      <Link href={children.route}>
        <NavLink>{children.text}</NavLink>
      </Link>
    </NavItem>
  );
}

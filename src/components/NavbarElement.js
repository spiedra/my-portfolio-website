import Link from "next/link";
import styled from "styled-components";

const NavItem = styled.li`
  padding: 1rem 2rem;
`;

const NavLink = styled.a`
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #67bc98;
  font-size: var(--nav-font-sizeL);

  &:hover {
    color: #7b7fda;
  }

  @media ${(props) => props.theme.bp.tablet} {
    font-size: var(--nav-font-sizeS);
  }

  @media ${(props) => props.theme.bp.laptop} {
    font-size: var(--nav-font-sizeL);
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

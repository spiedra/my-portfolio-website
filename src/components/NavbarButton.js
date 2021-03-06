import styled, { css } from "styled-components";

const Button = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0 2rem;

  @media ${(props) => props.theme.bp.tablet} {
    display: none;
  }
`;

const FirstLine = styled.path`
  ${(props) => props.theme.mixins.line}
  stroke-dasharray: 60 207;

  ${({ isOpen }) =>
    isOpen &&
    css`
      stroke-dasharray: 90 207;
      stroke-dashoffset: -134;
      stroke-width: 6;
    `}
`;

const SecondLine = styled.path`
  ${(props) => props.theme.mixins.line}
  stroke-dasharray: 60 207;

  ${({ isOpen }) =>
    isOpen &&
    css`
      stroke-dasharray: 1 60;
      stroke-dashoffset: -30;
      stroke-width: 6;
    `}
`;

const ThirdLine = styled.path`
  ${(props) => props.theme.mixins.line}
  stroke-dasharray: 60 207;

  ${({ isOpen }) =>
    isOpen &&
    css`
      stroke-dasharray: 90 207;
      stroke-dashoffset: -134;
      stroke-width: 6;
    `}
`;

export default function NavbarButton({ isOpen, handleSubmit }) {
  return (
    <Button onClick={handleSubmit}>
      <svg width="38" height="38" viewBox="0 0 100 100">
        <FirstLine
          isOpen={isOpen}
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <SecondLine isOpen={isOpen} d="M 20,50 H 80" />
        <ThirdLine
          isOpen={isOpen}
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </Button>
  );
}

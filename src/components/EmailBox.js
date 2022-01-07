import styled from "styled-components";

const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: auto;
  right: 20px;
  z-index: 10;

  &:after {
    content: "";
    display: block;
    width: 2.3px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--media-sticky);
  }
`;

const EmailLink = styled.a`
  transition: var(--btn-transition);
  font-size: 13px;
  margin: 25px auto;
  line-height: 18px;
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;

  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
`;

export default function EmailBox() {
  return (
    <EmailContainer>
      <EmailLink href="mailto:jcspiedra@gmail.com">jcspiedra@gmail.com</EmailLink>
    </EmailContainer>
  );
}

import styled from "styled-components";
import SocialMediaBox from "./SocialMediaBox";

const FooterContainer = styled.footer`
  ${(props) => props.theme.mixins.flexCenter}
  flex-direction: column;
  font-size: 26px;
  text-align: center;
  margin-top: .5rem;

  div {
    ${(props) => props.theme.mixins.flexCenter}
    margin: 0;
    padding: 0;
    width: 100%;
    @media ${(props) => props.theme.bp.tablet} {
      display: none;
    }
  }
`;

const FinalMessage = styled.span`
  font-size: 13px;
  padding-bottom: 1.4rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div>
        <SocialMediaBox />
      </div>
      <FinalMessage>© Jcspiedra - San José, Costa Rica 2021</FinalMessage>
    </FooterContainer>
  );
}

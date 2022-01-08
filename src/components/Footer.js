import styled from "styled-components";
import SocialMediaBox from "./SocialMediaBox";

const FooterContainer = styled.footer`
  ${(props) => props.theme.mixins.flexCenter}
  flex-direction: column;
  font-size: 24px;
  text-align: center;
`;

const FinalMessage = styled.span`
  font-size: 13px;
  padding-bottom: 1.4rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <SocialMediaBox />
      <FinalMessage>© Jcspiedra - San José, Costa Rica 2021</FinalMessage>
    </FooterContainer>
  );
}

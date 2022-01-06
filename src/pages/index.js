import styled from "styled-components";
import SvgDeveloper from "../components/SvgComponents/SvgDeveloper";

const LandingSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 85%;
  min-height: 90vh;
  padding: 10px 0;
`;

const IntroContainer = styled.article``;

const MainImageContainer = styled.div`
    width: 50%;
    height: 50%;
    ${(props) => props.theme.mixins.flexCenter}
`;

const HiMessage = styled.p``;

const MyName = styled.h1``;

const Presentation = styled.p``;

export default function Home() {
  return (
    <>
      <LandingSection>
        <IntroContainer>
          <HiMessage>Hi, my name is</HiMessage>
          <MyName>Juan Carlos Sequeira Piedra</MyName>
          <Presentation>I am a business informatics student</Presentation>
        </IntroContainer>
        <MainImageContainer>
          <SvgDeveloper/>
        </MainImageContainer>
      </LandingSection>
    </>
  );
}

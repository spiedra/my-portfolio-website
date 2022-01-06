import styled from "styled-components";
import SvgDeveloper from "../components/SvgComponents/SvgDeveloper";

const LandingSection = styled.section`
  ${(props) => props.theme.mixins.flexCenter}
  flex-direction: column-reverse;
  width: 90%;
  padding-top: 5rem;

  @media ${(props) => props.theme.bp.tablet} {
    flex-direction: row;
    min-height: 10vh;
    width: 85%;
  }
`;

const IntroContainer = styled.article`
  max-width: 80%;
  font-size: 18px;
  text-align: center;
`;

const MainImageContainer = styled.div`
  ${(props) => props.theme.mixins.flexCenter}
  width: 15.625rem;
  height: 14.0625rem;
`;

const HiMessage = styled.p`
  margin-top: .7rem;
`;

const MyName = styled.h1`
  color: var(--chetwode-blue);
`;

const Presentation = styled.p``;

const CurriculumButton = styled.button``;

export default function Home() {
  return (
    <>
      <LandingSection>
        <IntroContainer>
          <HiMessage>Hi, my name is</HiMessage>
          <MyName>Juan Carlos Sequeira Piedra</MyName>
          <Presentation>I am a business informatics student</Presentation>
          <CurriculumButton />
        </IntroContainer>
        <MainImageContainer>
          <SvgDeveloper />
        </MainImageContainer>
      </LandingSection>
    </>
  );
}

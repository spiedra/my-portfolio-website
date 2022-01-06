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
  margin-top: 0.7rem;
`;

const MyName = styled.h1`
  color: var(--chetwode-blue);
`;

const Presentation = styled.p`
  /* margin-bottom: .7rem; */
`;

const CurriculumButton = styled.button`
  padding: 10px 20px;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  text-decoration: none;
  color: var(--chetwode-blue);
  background: transparent;
  cursor: pointer;
  transition: var(--btn-transition);
  border-radius: 30px;
  border: 2px solid var(--chetwode-blue);
  border-radius: 30em;
  box-shadow: inset 0 0 0 0 var(--chetwode-blue);

  &:hover {
    color: #ffff;
    background-color: var(--chetwode-blue);
    border: 2px solid var(--chetwode-blue);
  }
`;

export default function Home() {
  return (
    <>
      <LandingSection>
        <IntroContainer>
          <HiMessage>Hi, my name is</HiMessage>
          <MyName>Juan Carlos Sequeira Piedra</MyName>
          <Presentation>I am a business informatics student</Presentation>
          <CurriculumButton>Dowload CV</CurriculumButton>
        </IntroContainer>
        <MainImageContainer>
          <SvgDeveloper />
        </MainImageContainer>
      </LandingSection>
    </>
  );
}

import styled from "styled-components";
import SvgDeveloper from "../components/SvgComponents/SvgDeveloper";

const Container = styled.section`
  ${(props) => props.theme.mixins.flexCenter}
  flex-direction: column-reverse;
  width: 90%;
  padding-top: 5rem;

  @media ${(props) => props.theme.bp.tablet} {
    flex-direction: row;
    width: 80%;
    min-height: 90vh;
  }
`;

const IntroContainer = styled.article`
  max-width: 80%;
  font-size: 18px;
  text-align: center;

  @media ${(props) => props.theme.bp.tablet} {
    text-align: inherit;
    font-size: 23px;
  }
`;

const MainImageContainer = styled.div`
  ${(props) => props.theme.mixins.flexCenter}
  width: 15.625rem;
  height: 14.0625rem;

  @media ${(props) => props.theme.bp.tablet} {
    width: 50%;
    height: 14.0625rem;
  }
`;

const HiMessage = styled.p`
  margin-top: 0.7rem;

  @media ${(props) => props.theme.bp.tablet} {
    margin: 0;
  }
`;

const MyName = styled.h1`
  color: var(--chetwode-blue);
`;

const CurriculumButton = styled.button`
  position: relative;
  z-index: 50;
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
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  @media ${(props) => props.theme.bp.tablet} {
    font-size: 22px;
    padding: 15px 30px;
    margin-top: 0.7rem;
  }
`;

export default function LandingSection() {
  return (
    <Container id="about-me">
      <IntroContainer>
        <HiMessage>Hi, my name is</HiMessage>
        <MyName>Juan Carlos Sequeira Piedra</MyName>
        <p>I am a business informatics student</p>
        <CurriculumButton>Dowload CV</CurriculumButton>
      </IntroContainer>
      <MainImageContainer>
        <SvgDeveloper />
      </MainImageContainer>
    </Container>
  );
}

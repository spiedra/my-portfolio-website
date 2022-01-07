import styled from "styled-components";
import SvgProgramming from "../components/SvgComponents/SvgProgramming";

const Container = styled.section`
  ${(props) => props.theme.mixins.flexCenter}
  flex-direction: column;
  width: 90%;
  padding-top: 5rem;

  @media ${(props) => props.theme.bp.tablet} {
    padding: 0;
    flex-direction: row-reverse;
    width: 90%;
    min-height: 70vh;
  }
`;

const IntroContainer = styled.article`
  max-width: 90%;

  @media ${(props) => props.theme.bp.tablet} {
    text-align: inherit;
    font-size: 23px;
    margin-left: 3rem;
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

const Title = styled.h1`
  color: var(--silver-tree);
  margin-bottom: 0.3rem;
  font-size: 1.6rem;
`;

const Subtitle = styled.h2`
  font-size: 23px;
`;

const Description = styled.p`
  font-size: 17px;
  line-height: 28px;
`;

const Interests = styled.p`
  font-size: 17px;
  line-height: 28px;
`;

const Highlighter = styled.span`
  font-size: 23px;
  color: var(--silver-tree);
`;

const InterestsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  padding: 0;
  margin: 20px 0px 0px;
  overflow: hidden;
`;

const IterestItem = styled.li`
  position: relative;
  padding-left: 25px;
  font-size: 13px;
  margin-bottom: 10px;

  &::before {
    content: "▹";
    position: absolute;
    left: 0;
    color: var(--silver-tree);
    font-size: 30px;
    line-height: 12px;
  }
`;

export default function AboutSection() {
  return (
    <Container>
      <IntroContainer>
        <Title>01.About me</Title>
        <Subtitle>
          My main focus is to become a{" "}
          <Highlighter>Full-Stack Developer</Highlighter>
        </Subtitle>
        <Description>
          Currently I&apos;m studying Business Informatics at University of Costa
          Rica. My interest in technology started when I was a child and
          continues to grow to this day, that makes me really love to learn and
          create new things.
        </Description>
        <Interests>
          Here are a few technologies in which I am interested:
        </Interests>
        <InterestsList>
          <IterestItem>Blockchain</IterestItem>
          <IterestItem>Smart Contracts</IterestItem>
          <IterestItem>DApps</IterestItem>
        </InterestsList>
      </IntroContainer>
      <MainImageContainer>
        <SvgProgramming />
      </MainImageContainer>
    </Container>
  );
}

import styled from "styled-components";
import SvgProgramming from "../components/SvgComponents/SvgProgramming";

const Container = styled.section`
  ${(props) => props.theme.mixins.flexCenter}
  flex-direction: column;
  width: 90%;
  padding-top: 1.5rem;

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
    margin-right: 1rem;
  }

  @media ${(props) => props.theme.bp.laptop} {
    margin-right: 0rem;
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
          I&apos;m a Cybersecurity Professional with a passion for{" "}
          <Highlighter>Offensive Security</Highlighter>.
        </Subtitle>
        <Description>
          I&apos;ve always been fascinated by technology, and over the years,
          that curiosity turned into a love for hacking (the ethical kind, of
          course!). I&apos;ve been diving into adversary emulation, post-breach
          attacks, and testing zero-day exploits. I also love working with the
          blue team to fine-tune defense strategies and make systems more
          resilient. And of course automate stuff...
        </Description>
        <Description>
          I&apos;m always looking to learn and improve, so you&apos;ll often
          find me diving into CTF competitions or experimenting with new tools
          and techniques. One day, I&apos;d love to give back to the community
          by building open-source tools, sharing what I know at conferences, and
          helping others get into this awesome field.
        </Description>
        <Interests>
          Here are a few things and areas I&apos;m interested in:
        </Interests>
        <InterestsList>
          <IterestItem>Bug Bounty Hunting</IterestItem>
          <IterestItem>AI</IterestItem>
          <IterestItem>DevSecOps</IterestItem>
          <IterestItem>CTF Competitions</IterestItem>
        </InterestsList>
      </IntroContainer>
      <MainImageContainer>
        <SvgProgramming />
      </MainImageContainer>
    </Container>
  );
}

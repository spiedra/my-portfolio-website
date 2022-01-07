import styled from "styled-components";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import {FaPhp} from "react-icons/fa"

const skillsElements = [
  {
    name: "Html",
    icon: (
      <AiFillHtml5
        style={{
          color: "#ef6026",
          fontSize: "4rem",
        }}
      />
    ),
  },
  {
    name: "Css",
    icon: (
      <DiCss3Full
        style={{
          color: "#2965f1",
          fontSize: "4rem",
        }}
      />
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <IoLogoJavascript
        style={{
          color: "#f7df1e",
          fontSize: "4rem",
        }}
      />
    ),
  },
  {
    name: "PHP",
    icon: (
      <FaPhp
        style={{
          color: "#49538C",
          fontSize: "4rem",
        }}
      />
    ),
  },
  {
    name: "PHP",
    icon: (
      <FaPhp
        style={{
          color: "#49538C",
          fontSize: "4rem",
        }}
      />
    ),
  },
];

const Container = styled.section`
  ${(props) => props.theme.mixins.flexCenter}
  flex-direction: column;
  width: 90%;
  padding-top: 4rem;

  @media ${(props) => props.theme.bp.tablet} {
    width: 90%;
    /* min-height: 70vh; */
  }
`;

const ToolkitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const ToolkitItem = styled.div`
  ${(props) => props.theme.mixins.flexCenter}
  flex-direction: column;
`;

const ToolkitItemName = styled.span``;

const Title = styled.h1`
  color: var(--silver-tree);
  margin-bottom: 0.3rem;
  font-size: 1.6rem;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 28px;
  padding: 0 5rem;
  text-align: center;
`;

const listSkillsElements = skillsElements.map((element, index) => (
  <ToolkitItem key={index}>
    {element.icon}
    <ToolkitItemName>{element.name}</ToolkitItemName>
  </ToolkitItem>
));

export default function SkillsSection() {
  return (
    <Container>
      <Title>02.Skills</Title>
      <Description>
        The skills I have acquired over the last few years learning and
        developing projects
      </Description>
      <ToolkitContainer>{listSkillsElements}</ToolkitContainer>
    </Container>
  );
}

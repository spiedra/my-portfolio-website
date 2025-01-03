import styled from "styled-components";

import SvgHtml from "./SvgComponents/SvgHtml";
import SvgCss from "./SvgComponents/SvgCss";
import SvgJavascript from "./SvgComponents/SvgJavascript";
import SvgPhp from "./SvgComponents/SvgPhp";
import SvgCplusplus from "./SvgComponents/SvgCplusplus";
import SvgCsharp from "./SvgComponents/SvgCsharp";
import SvgJava from "./SvgComponents/SvgJava";
import SvgGit from "./SvgComponents/SvgGit";
import SvgNode from "./SvgComponents/SvgNode";
import SvgPython from "./SvgComponents/SvgPython";
import SvgC from "./SvgComponents/SvgC";
import SvgJenkins from "./SvgComponents/SvgJenkins";
import SvgGoogleCloud from "./SvgComponents/SvgGoogleCloud";
import SvgMysql from "./SvgComponents/SvgMysql";
import SvgDocker from "./SvgComponents/SvgDocker";
import SvgTerraform from "./SvgComponents/SvgTerraform";

const skillsElements = [
  { name: "Html", icon: <SvgHtml /> },
  { name: "Css", icon: <SvgCss /> },
  { name: "JavaScript", icon: <SvgJavascript /> },
  { name: "PHP", icon: <SvgPhp /> },
  { name: "C", icon: <SvgC /> },
  { name: "C++", icon: <SvgCplusplus /> },
  { name: "C Sharp", icon: <SvgCsharp /> },
  { name: "Python", icon: <SvgPython /> },
  { name: "Java", icon: <SvgJava /> },
  { name: "Terraform", icon: <SvgTerraform /> },
  { name: "NodeJS", icon: <SvgNode /> },
  { name: "Jenkins", icon: <SvgJenkins /> },
  { name: "GCP", icon: <SvgGoogleCloud /> },
  { name: "MySQL", icon: <SvgMysql /> },
  { name: "Git", icon: <SvgGit /> },
  { name: "Docker", icon: <SvgDocker /> },
];

const Container = styled.section`
  ${(props) => props.theme.mixins.flexCenter}
  flex-direction: column;
  width: 90%;
  padding-top: 1.5rem;

  @media ${(props) => props.theme.bp.tablet} {
    width: 90%;
    padding-top: 4rem;
  }
`;

const ToolkitContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(auto, auto));
  padding: 0;
  overflow: hidden;

  @media ${(props) => props.theme.bp.mobileL} {
    grid-template-columns: repeat(3, minmax(150px, auto));
  }

  @media ${(props) => props.theme.bp.tablet} {
    grid-template-columns: repeat(4, minmax(100px, 210px));
  }
`;

const ToolkitItem = styled.div`
  ${(props) => props.theme.mixins.flexCenter}
  flex-direction: column;
  padding: 1rem;
`;

const ToolkitItemName = styled.span`
  margin-top: 0.4rem;
`;

const Title = styled.h1`
  color: var(--silver-tree);
  margin-bottom: 0.3rem;
  font-size: 1.6rem;
`;

const Description = styled.p`
  font-size: 15px;
  line-height: 28px;
  text-align: center;

  @media ${(props) => props.theme.bp.tablet} {
    padding: 0 5rem;
    font-size: 18px;
  }
`;

const listSkillsElements = skillsElements.map((element, index) => (
  <ToolkitItem key={index}>
    {element.icon}
    <ToolkitItemName>{element.name}</ToolkitItemName>
  </ToolkitItem>
));

export default function SkillsSection() {
  return (
    <Container id="skills">
      <Title>02.Skills</Title>
      <Description>
        Here are some of the skills I&apos;ve developed over the past few years
        through learning, building projects, and hands-on experience
      </Description>
      <ToolkitContainer>{listSkillsElements}</ToolkitContainer>
    </Container>
  );
}

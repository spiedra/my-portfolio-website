import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import styled, { css } from "styled-components";

import onlineStore from "../../public/images/onlineStore.jpg";
import digitalManager from "../../public/images/digitalManager.jpg";

const projectsElements = [
  {
    name: "EN-Dictionary",
    description:
      "English dictionary web application developed with React, Styled-components, React Router v6, Docker and Axios",
    link: "https://en-dictionary-spiedra.vercel.app/",
    repoLink: "https://github.com/spiedra/en-dictionary",
    technologies: [
      { techName: "React" },
      { techName: "Docker" },
      { techName: "Axios" },
    ],
  },
  {
    name: "This Portfolio",
    description:
      "Developed using the react Nextjs framework and Styled-components with icons from DevIcon and react-icons",
    repoLink: "https://github.com/spiedra/my-portfolio-website",
    technologies: [
      { techName: "React" },
      { techName: "Next.js" },
      { techName: "Styled-components" },
    ],
  },
  {
    name: "Android App Pokedex",
    description:
      "Java android application. Using web services with Retrofit library and POKEDEX web api",
    repoLink: "https://github.com/spiedra/androidAppPokedex",
    technologies: [{ techName: "Java" }, { techName: "Retrofit 2.0" }],
  },
  {
    name: "Word of the Day API",
    description:
      "A Word-of-the-Day API using Web Scrapping via the Cheerio library, the Node.js Express.js framework and Axios",
    link: "https://word-of-the-day-omega.vercel.app/word-of-the-day",
    repoLink: "https://github.com/spiedra/word-of-the-day",
    technologies: [
      { techName: "Express.js" },
      { techName: "Cheerio" },
      { techName: "Axios" },
    ],
  },
  {
    name: "Online Store",
    description:
      "Online store for cleaning and protection articles, developed with PHP, MVC, JQuery and Boostrap5 (college project)",
    repoLink: "https://github.com/spiedra/online-store",
    img: onlineStore,
    technologies: [
      { techName: "PHP" },
      { techName: "MySQL" },
      { techName: "JQuery" },
      { techName: "Boostrap 5" },
    ],
  },
  {
    name: "Lavarel RESTful API",
    description:
      "RESTful movie API developed with laravel 8, MySQL with Eloquent ORM and migrations",
    link: "https://lavarel-rest-ful-api.vercel.app/",
    repoLink: "https://github.com/spiedra/online-store",
    technologies: [
      { techName: "PHP" },
      { techName: "Laravel 8" },
      { techName: "MySQL" },
    ],
  },
  {
    name: "Digital Manager",
    description:
      "Information system developed in conjunction with classmates for the automation of processes in support of a public institution, using ASP.NET Core MVC, SQL Server, Bootstrap 5 and JQuery (college project)",
    repoLink: "https://github.com/spiedra/Gestor-Digital-ASADA-CL",
    img: digitalManager,
    technologies: [
      { techName: "C#" },
      { techName: "ASP.NET Core MVC" },
      { techName: "SQL Server" },
    ],
  },
  {
    name: "Digital Health Manger",
    description:
      "Developed in conjunction with other classmate, we created a plataform that allows to centralize information related to a digital health record using ASP.NET, SQL Server, JQuery and Boostrap 5 (college project)",
    repoLink: "https://github.com/spiedra/IF4101-digital-health-web",
    technologies: [
      { techName: "C#" },
      { techName: "ASP.NET Core MVC" },
      { techName: "SQL Server" },
    ],
  },
];

const Container = styled.section`
  ${(props) => props.theme.mixins.flexCenter}
  flex-direction: column;
  max-width: 90%;
  padding-top: 1.5rem;

  @media ${(props) => props.theme.bp.tablet} {
    margin-bottom: 2rem;
  }
`;

const SubContainer = styled.div`
  ${(props) => props.theme.mixins.flexCenter}
  flex-direction: column;
  margin-top: 2rem;
  gap: 50px;

  @media ${(props) => props.theme.bp.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const ProjectContainer = styled.div`
  padding: 12px 14px;
  max-width: 90%;
  height: auto;
  background-color: #fafbfd;
  border-radius: 8px;
  box-shadow: 2px 2px 2px 2px #cad4e2, -4px -5px 8px #c6d2e0;

  @media ${(props) => props.theme.bp.mobileL} {
    max-width: 70%;
  }

  @media ${(props) => props.theme.bp.tablet} {
    max-width: 35%;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (min-width: 900px) {
    max-width: 35%;
  }

  @media ${(props) => props.theme.bp.laptopL} {
    max-width: 25%;
  }
`;

const ProjectImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 150px;

  transition: var(--btn-transition);

  &:hover,
  &:focus {
    transform: scale(1.02);
  }
`;

const ProjectOutImgContainer = styled.div`
  ${(props) => props.theme.mixins.flexCenter}
  width: 100%;
  height: 150px;
  text-align: center;
`;

const ProjecBottomtItem = styled.li`
  margin-left: 0.3rem;
  font-size: 18px;
  transition: var(--btn-transition);

  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
`;

const ProjectLink = styled.a`
  font-size: 1.6175rem;
`;

const ProjectName = styled.h2`
  font-size: ${(props) => (props.isImage ? "1.4rem" : "2.5rem")};
  color: ${(props) => (props.isImage ? "#000000" : "var(--chetwode-blue)")};
  margin-bottom: ${(props) => props.isImage && "0"};
  font-weight: 700;

  transition: var(--btn-transition);

  ${(props) =>
    !props.isImage &&
    css`
      &:hover,
      &:focus {
        transform: scale(1.02);
      }
    `}
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 0.5rem;
`;

const ProjectBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const ProjectBottomTechnologies = styled.div`
  ${(props) => props.theme.mixins.flexCenter}
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 10px;
`;

const Technologies = styled.span`
  color: #ada9a9;
  font-size: 13px;
`;

const ProjectBottomLinks = styled.ul`
  ${(props) => props.theme.mixins.flexCenter}
  margin: .5rem 0;
  padding: 0;
`;

const Title = styled.h1`
  color: var(--silver-tree);
  font-size: 1.6rem;
`;

const listProjects = projectsElements.map((element, index) => (
  <ProjectContainer key={index}>
    {element.img ? (
      <>
        <ProjectLink href={element.link} target="_blank" rel="noreferrer">
          <ProjectImgContainer>
            <Image
              src={element.img}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              alt={`Image of ${element.name}`}
            />
          </ProjectImgContainer>
        </ProjectLink>
        <ProjectName isImage={true}>{element.name}</ProjectName>
      </>
    ) : (
      <ProjectLink href={element.link} target="_blank" rel="noreferrer">
        <ProjectOutImgContainer>
          <ProjectName isImage={false}>{element.name}</ProjectName>
        </ProjectOutImgContainer>
      </ProjectLink>
    )}
    <ProjectDescription>{element.description}</ProjectDescription>
    <ProjectBottom>
      <ProjectBottomTechnologies>
        {element.technologies.map((technology, index) => (
          <Technologies key={index}>{technology.techName}</Technologies>
        ))}
      </ProjectBottomTechnologies>
      <ProjectBottomLinks>
        {element.link && (
          <ProjecBottomtItem>
            <ProjectLink href={element.link} target="_blank" rel="noreferrer">
              <HiOutlineExternalLink />
            </ProjectLink>
          </ProjecBottomtItem>
        )}
        <ProjecBottomtItem>
          <ProjectLink href={element.repoLink} target="_blank" rel="noreferrer">
            <AiFillGithub />
          </ProjectLink>
        </ProjecBottomtItem>
      </ProjectBottomLinks>
    </ProjectBottom>
  </ProjectContainer>
));

export default function ProjectSection() {
  return (
    <Container id="projects">
      <Title>03.Projects</Title>
      <SubContainer>{listProjects}</SubContainer>
    </Container>
  );
}

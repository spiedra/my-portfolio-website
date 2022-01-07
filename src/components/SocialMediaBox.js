import styled from "styled-components";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const socialMediaElements = [
  { route: "https://github.com/spiedra", icon: <AiFillGithub /> },
  {
    route: "https://www.linkedin.com/in/juan-carlos-sequeira-piedra-6b924321b/",
    icon: <FaLinkedinIn />,
  },
  { route: "https://twitter.com/jcpiedra_", icon: <AiOutlineTwitter /> },
];

const SocialMediaMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 50%;
  padding: 0;
  margin: 1.4rem 0;

  @media ${(props) => props.theme.bp.tablet} {
    justify-content: space-between;
    height: 38%;
    align-items: flex-start;
    flex-direction: column;
    position: fixed;
    left: 25px;
    right: auto;
    z-index: 20;
    font-size: 1.7rem;
    bottom: 0;
    width: auto;
    margin: 0;

    &:after {
      content: "";
      display: block;
      width: 2px;
      height: 90px;
      margin: 0 auto;
      background-color: var(--media-sticky);
    }
  }
`;

const SocialMediaItem = styled.li`
  @media ${(props) => props.theme.bp.tablet} {
    transition: var(--btn-transition);

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;

const listSocialMediaElements = socialMediaElements.map((element, index) => (
  <SocialMediaItem key={index}>
    <a href={element.route} target="_blank" rel="noreferrer">
      {element.icon}
    </a>
  </SocialMediaItem>
));

export default function SocialMediaBox() {
  return <SocialMediaMenu>{listSocialMediaElements}</SocialMediaMenu>;
}

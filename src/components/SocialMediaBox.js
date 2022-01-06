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
`;

const listSocialMediaElements = socialMediaElements.map((element, index) => (
  <li key={index}>
    <a href={element.route} target="_blank" rel="noreferrer">
      {element.icon}
    </a>
  </li>
));

export default function SocialMediaBox() {
  return <SocialMediaMenu>{listSocialMediaElements}</SocialMediaMenu>;
}

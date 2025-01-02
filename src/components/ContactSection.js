import React from "react";
import styled from "styled-components";

const Container = styled.section`
  ${(props) => props.theme.mixins.flexCenter}
  flex-direction: column;
  max-width: 90%;
  padding-top: 1.5rem;
  text-align: center;

  @media ${(props) => props.theme.bp.tablet} {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  color: var(--silver-tree);
  font-size: 1.6rem;
`;

const Description = styled.p`
  width: 95%;
  line-height: 28px;
  font-size: 16px;

  @media ${(props) => props.theme.bp.tablet} {
    width: 75%;
  }
`;

const ContactMeBtn = styled.a`
  margin: 2.8rem 0 6rem 0;
  display: inline-block;
  padding: 15px 30px;
  text-align: center;
  font-size: 17px;
  letter-spacing: 1px;
  text-decoration: none;
  color: var(--chetwode-blue);
  background: transparent;
  cursor: pointer;
  transition: var(--btn-transition);
  border: 2px solid var(--chetwode-blue);
  border-radius: 8px;
  box-shadow: inset 0 0 0 0 var(--chetwode-blue);

  &:hover {
    transform: translateY(-3px);
  }
`;

const ContactSection = () => {
  return (
    <Container id="contact">
      <Title>04.Contact</Title>
      <Description>
      I&apos;m not just passionate about what I do, I&apos;m also excited to
        collaborate and learn from other professionals in the industry. Feel
        free to reach out if you&apos;d like to discuss ideas, share knowledge,
        or just connect.
      </Description>
      <ContactMeBtn href="mailto:jcspiedra@gmail.com">
        Send me an email
      </ContactMeBtn>
    </Container>
  );
};

export default ContactSection;

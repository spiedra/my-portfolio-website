import React from "react";
import styled from "styled-components";

const Container = styled.section`
  ${(props) => props.theme.mixins.flexCenter}
  flex-direction: column;
  max-width: 90%;
  padding-top: 1.5rem;

  @media ${(props) => props.theme.bp.tablet} {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  color: var(--silver-tree);
  font-size: 1.6rem;
`;

const Description = styled.p``;

const ContactMeBtn = styled.a``;

const ContactSection = () => {
  return (
    <Container id="contact">
      <Title>04.Contact</Title>
      <Description></Description>
      <ContactMeBtn></ContactMeBtn>
    </Container>
  );
};

export default ContactSection;

import styled from "styled-components";

const Container = styled.div`
  ${(props) => props.theme.mixins.flexCenter}

  @media ${(props) => props.theme.bp.laptop} {
    background-color: red;
  }
`;

export default function Home() {
  return (
    <>
      <Container>
        <h2>This is the main</h2>
      </Container>
    </>
  );
}

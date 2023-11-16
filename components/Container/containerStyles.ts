import styled from "styled-components";

export const Container = styled.section`
  scroll-snap-align: start;
  width: 100%;
  height: 100vh;
  padding: 0 2rem;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    height: unset;
    width: 100vw;
    padding: 2rem;
  }
`

export const Row = styled.section`
  padding: 0 1vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  min-width: 0;

  & > * {
    flex: 1 auto;
  }

  @media only screen and (max-width: 600px) {
    padding: 0 .5vw;
  }
`
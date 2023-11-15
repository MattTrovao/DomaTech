import styled from "styled-components";

export const MainContent = styled.main`
  width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.COLORS.WHITE};
    border-radius: 10px;
  }

  @media only screen and (max-width: 600px) {
    height: unset;
    scroll-snap-type: unset;
    overflow: hidden;
  }
`
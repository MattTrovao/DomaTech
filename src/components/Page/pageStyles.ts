import styled from "styled-components";

export const MainContent = styled.main`
  width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  position: relative;

  // Scroll personalizado do site
  &::-webkit-scrollbar {
    width: 8px;
    z-index: 100;
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

export const AnimeLeft = styled.div`
  border: 4px solid ${props => props.theme.COLORS.WHITE};
  position: fixed;
  top: 20%;
  left: -20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  animation: animeDown infinite 30s ease-in-out; 
  z-index: 9;

  &::before{
    content: "";
    width: 40%;
    height: 40%;
    background: ${props => props.theme.COLORS.YELLOW};
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10%
  }

  @media only screen and (max-width: 600px) {
    border: 2px solid ${props => props.theme.COLORS.WHITE}; 
  }
`

export const IconBottom = styled.div`
  border: 4px solid ${props => props.theme.COLORS.WHITE};
  position: fixed;
  bottom: -30px;
  right: 30px;
  width: 60px;
  height: 60px;
  animation: turnCircle infinite 15s ease-in-out;
  z-index: 9;

  @media only screen and (max-width: 600px) {
    border: 2px solid ${props => props.theme.COLORS.WHITE};
    bottom: -10px;
    right: -10px;
    width: 30px;
    height: 30px;
  }
`
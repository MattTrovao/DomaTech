import styled from "styled-components";


export const HeaderContainer = styled.header`
  background: ${props => props.theme.COLORS.BLACK};
  width: calc(100% - 20px); //Largura do scroll personalizado
  padding: 1.5rem 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 1.5rem;
  position: fixed;
  top: 0;
  z-index: 10;

  @media only screen and (max-width: 600px) {
    width: 100vw;
    padding: 1rem;
  }
`

export const HeaderLogo = styled.div`
  svg{
    height: 40px;
  }
`

export const HeaderLinks = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 2rem;
`

export const Link = styled.a`
  background: ${props => props.theme.COLORS.WHITE};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: relative;
  transition: all ease-in-out .4s;

  &:hover{
    box-shadow: 0 0 8px 4px ${props => props.theme.COLORS.YELLOW};

    svg{
      fill: ${props => props.theme.COLORS.BROWN};
    }
  }

  svg{
    width: 70%;
    height: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    fill: ${props => props.theme.COLORS.BLACK};
    transition: all ease-in-out .4s;
  }
`
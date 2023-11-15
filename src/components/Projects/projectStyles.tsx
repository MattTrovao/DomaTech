import styled from "styled-components";

export const ProjectCard = styled.div`
  width: 100%;
  height:100%;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 1fr 40%;
  gap: 1rem;
  align-items: center;

  @media only screen and (max-width: 900px) {
    display: block;
  }

  @media only screen and (max-width: 600px) {
    padding: 0;
  }
`

export const ProjectCover = styled.div`
  border: 1px solid ${props => props.theme.COLORS.YELLOW};
  border-radius: 10px;
  height: 70vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  position: relative;

  @media only screen and (max-width: 900px) {
    height: 30vh;
  }
`

export const ProjectName = styled.div`
  padding: 1rem;
  border-radius: inherit;
  background: ${props => props.theme.COLORS.BLACK_OP};
  width: 100%;
  
  h1{
    margin: 0;
  }
`

export const ProjectTech = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  padding-left: 20px;

  li{
    &:after{
      content: "|";
      margin: 0 1rem;
      color: ${props => props.theme.COLORS.WHITE};
    }
    &:nth-child(2n){
      color: ${props => props.theme.COLORS.YELLOW};
    }

    &:first-of-type,
    &:last-of-type{
      &:after{
        display: none;
      }
    }

    &:first-of-type{
      margin-right: 10px;
    }
  }
`

export const ProjectCompany = styled.a`
  color: ${props => props.theme.COLORS.YELLOW};
  text-decoration: none;
  font-size: 1.8rem;
  font-family: 'Anton', sans-serif;
  font-weight: ${props => props.theme.WEIGHT.TITLE};
  transition: all ease-in-out .4s;

  &:hover{
    opacity: .6;
  }

  @media only screen and (max-width: 1300px){
    font-size: 1.4rem;
  }
`

export const ProjectDesc = styled.div`
  padding: 0 1.5rem;;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-direction: column;
  
  p{
    text-indent: 20px;
  }

  @media only screen and (max-width: 900px) {
    padding: 2rem 1.5rem;
  }

  @media only screen and (max-width: 600px) {
    padding: 1rem .5rem;
  }
`

export const ProjectLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: .4rem 1rem;
  background: ${props => props.theme.COLORS.YELLOW};
  color: ${props => props.theme.COLORS.BLACK};
  font-size: .8rem;
  text-decoration: none;
  border-radius: 10px;
  font-family: 'Anton', sans-serif;
  font-weight: ${props => props.theme.WEIGHT.TITLE};
  transition: all ease-in-out .4s;

  &:hover{
    opacity: .6;
    svg{
      right: -5px;
      transform: scale(.6);
    }
  }

  svg{
    width: 15px;
    fill: ${props => props.theme.COLORS.BLACK};
    transition: all ease-in-out .4s;
  }
`
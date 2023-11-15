import styled from "styled-components";

export const ProjectCard = styled.div`
  width: 100%;
  height:100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  img{
    width: 100%;
    height: 40%;
    max-height: 480px;
    object-fit: contain;
  }
`

export const ProjectName = styled.div`
  padding: 1rem;
  border: 1px solid ${props => props.theme.COLORS.YELLOW};
  border-radius: 10px;
  h1{
    margin: 0;
  }
`

export const ProjectTech = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;

  li{
    &:after{
      content: "|";
      margin: 0 1rem;
      color: ${props => props.theme.COLORS.WHITE};
    }
    &:nth-child(2n + 1){
      color: ${props => props.theme.COLORS.YELLOW};
    }
    &:last-of-type{
      &:after{
        display: none;
      }
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
`

export const ProjectDesc = styled.div`
  padding: 0 3rem;
`
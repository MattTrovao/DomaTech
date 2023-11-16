import styled from "styled-components";


export const AboutContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;   
  }
`

export const ContentPicture = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;

  @media only screen and (max-width: 900px) {
    margin: 0 auto;
  }
`

export const ContentText = styled.div`
  text-align: left;

  p{
    text-indent: 20px;
    padding: 0 1rem;
  }

  @media only screen and (max-width: 900px) {
    text-align: center;
  }
`

export const KnowTable = styled.div`
  display: inline-grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  gap: 1rem;
  width: 40%;
  margin: 0 auto;

  img{
    width: 120px;
  }

  @media only screen and (max-width: 900px) {
    width: 50%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

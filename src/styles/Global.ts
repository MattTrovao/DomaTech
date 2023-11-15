import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: ${props => props.theme.COLORS.WHITE};
  font-family: 'Archivo', sans-serif;
}

html,body{ background: ${props => props.theme.COLORS.BLACK}; overflow: hidden }

#root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
}


.txtYellow { color: ${props => props.theme.COLORS.YELLOW}; }
.txtBrown { color: ${props => props.theme.COLORS.BROWN}; }
.txtLBrown { color: ${props => props.theme.COLORS.L_BROWN}; }
.txtGreen { color: ${props => props.theme.COLORS.GREEN}; }

h1,h2,
h3,h4,
h5,h6{
  font-family: 'Anton', sans-serif;
  margin-bottom: 1rem;
  font-weight: ${props => props.theme.WEIGHT.TITLE};
}

h1 { font-size: 2.4rem; }
h2 { font-size: 1.8rem; }
h3 { font-size: 1.6rem; }
h4 { font-size: 1.4rem; }
h5 { font-size: 1.2rem; }
h6 { font-size: 1rem; }
.caption { font-size: .8rem; }

p,li { 
  font-size: 1rem; 
  line-height: 1.6; 
  margin-bottom: .5rem; 
  font-weight: ${props => props.theme.WEIGHT.TEXT};
}

span { font-family: inherit}

.swiper-button-next,
.swiper-button-prev{
  width: 35px;
  height: 35px;
  background: ${props => props.theme.COLORS.WHITE};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all ease-in-out .4s;

  &:hover{
    box-shadow: 0 0 8px 4px ${props => props.theme.COLORS.YELLOW};
  }

  &::after{
    color: ${props => props.theme.COLORS.BLACK};
    font-size: 1rem;
  }
}

// Media Querys
@media only screen and (max-width: 1300px) {
  h1 { font-size: 1.5rem; }
  h2 { font-size: 1.4rem; }
  h3 { font-size: 1.3rem; }
  h4 { font-size: 1.2rem; }
  h5 { font-size: 1.1rem; }
  p,li { font-size: .8rem;}
}

@media only screen and (max-width: 600px) {
  html,body{ overflow: auto; }

  .swiper-button-next,
  .swiper-button-prev{
    top: 25%;

    &:hover{
      box-shadow: 0 0 4px 4px ${props => props.theme.COLORS.YELLOW};
    }
  }

  .swiper-button-next {
    right: 2%;
  }
  .swiper-button-prev {
    left: 2%;
  }
}
`
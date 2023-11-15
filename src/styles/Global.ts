import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: ${props => props.theme.COLORS.WHITE};
}

html,body{
  background: ${props => props.theme.COLORS.BLACK};
}

#root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
}
`
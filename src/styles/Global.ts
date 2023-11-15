import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box
}

html,body{
  font-size: 14px;
  background: ${props => props.theme.COLORS.WHITE};
}

#root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
  height: 100vh;
}
`
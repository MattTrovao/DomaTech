import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalCSS } from './styles/Global'

import { Header } from './components/Header'

export default function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      
      <Header />

      <GlobalCSS />
    </ThemeProvider>
  )
}


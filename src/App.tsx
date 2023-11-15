import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalCSS } from './styles/Global'

import { Header } from './components/Header'
import { Page } from './components/Page'
import { Content } from './components/Container'
import { About } from './components/About'
import { Projects } from './components/Projects'

export default function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />

      <Page>
        <Content>
          <About />
        </Content>

        <Content>
          <Projects />
        </Content>
      </Page>

      <GlobalCSS />
    </ThemeProvider>
  )
}


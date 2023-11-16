import { IconBottom, AnimeLeft, MainContent } from "./pageStyles"

export const Page = ({ children }: any)  => {
  return(
    <MainContent>
      {children}

      <AnimeLeft />
      <IconBottom />
    </MainContent>
  )
}
import { MainContent } from "./pageStyles"

export const Page = ({ children }: any)  => {
  return(
    <MainContent>
      {children}
    </MainContent>
  )
}
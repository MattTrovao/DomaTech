import { HeaderContainer, HeaderLogo, HeaderLinks, Link } from "./headerStyles"

import { ReactSVG } from "react-svg"
import Logo from '../../assets/logo.svg'
import Linkedin from '../../assets/Icons/Linkedin.svg'
import Github from '../../assets/Icons/Github.svg'


export const Header = () => {
  return(
    <HeaderContainer>
      <HeaderLogo>
        <ReactSVG src={Logo} />
      </HeaderLogo>

      <HeaderLinks>
        <Link href="https://www.linkedin.com/in/trovao-matheus/" target="_blank">
          <ReactSVG src={Linkedin} />
        </Link>

        <Link href="https://github.com/MattTrovao" target="_blank">
          <ReactSVG src={Github} />
        </Link>
      </HeaderLinks>
    </HeaderContainer>
  )
}
import { AboutContent, ContentPicture, ContentText, KnowTable } from "./aboutStyles"

export const About = () => {
  return(
    <AboutContent>
      <ContentPicture src="https://github.com/MattTrovao.png"/>

      <ContentText>
        <h1>Matheus <span className="txtYellow">Trovão Consentino</span></h1>

        <p>
          Durante minha jornada profissional me foquei principalmente no desenvolvimento de websites, apesar disso sempre gostei do viés da criação, o que me levou a uma faculdade de design e fazer alguns cursos extras de UX Design. Atualmente busco aprimorar minhas habilidades de programador (VueJs e React) juntamente com minhas habilidades e conhecimentos de UX Design.
        </p>

        <h2><span className="txtYellow">Programas e Linguagens</span> que conheço</h2>

        <KnowTable>
          <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML 5" />
          <p>Avançado</p>
          
          <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
          <p>Avançado</p>

          <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" alt="SASS" />
          <p>Intermediário</p>
          
          <img src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" alt="VueJS" />
          <p>Intermediário</p>

          <img src="https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white" alt="WordPress" />
          <p>Intermediário</p>

          <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
          <p>Básico</p>

          <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
          <p>Básico</p>
        </KnowTable>

        <KnowTable>
          <img src="https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white" alt="Adobe Photoshop" />
          <p>Intermediário</p>
          
          <img src="https://img.shields.io/badge/adobe%20illustrator-%23FF9A00.svg?style=for-the-badge&logo=adobe%20illustrator&logoColor=white" alt="Adobe Illustrator" />
          <p>Intermediário</p>

          <img src="https://img.shields.io/badge/Adobe%20InDesign-49021F?style=for-the-badge&logo=adobeindesign&logoColor=white" alt="Adobe InDesign" />
          <p>Intermediário</p>

          <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />
          <p>Intermediário</p>
        </KnowTable>
      </ContentText>
    </AboutContent>
  )
}
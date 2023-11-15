# Portfolio para DomaTech

Projeto desenvolvido para teste como Front End na empresa Domatech

[Link do Projeto](https://doma-tech.vercel.app/)


## Instalção de Dependencias

Para instalar rode um dos comandos abaixo:

```sh
npm install
npm i
```

## Servidor para Desenvolvimento

Após a instalação das dependências, rode o seguinte comando:

```sh
npm run dev
```

## Desenvolvimento do Projeto

O projeto foi desenvolvido utilzando React com Styled Components, para criação do slider dos projetos foi utilizado o plugin do Swiper.Js.

Os projetos foram captados de uma base do Firebase, de forma a ser possível realizar futuramente uma atualização que permita administrar todos os projetos mais facilmente, em vez de adicionar no próprio painel do Firebase.

Para a criação dos componentes foi seguido a base da metodologia BEM (Blocked Elements Modifier), onde cada elemento da página controla a nomeclatura dos seus filhos, facilitando a leitura dos componentes. Sua nomeclatura seguiu o padrão de Camel Case.

Por conta do projeto utlizar apenas 4 ícones foi optado por utilzar o plugin React SVG para trabalhar diretamente com arquivos SVG em vez de instalar toda uma biblioteca de ícones, diminuindo o peso do projeto.
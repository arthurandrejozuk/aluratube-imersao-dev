import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
   
  }
  body {
    
    
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  #__next {
    
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .8;
    }
  }
`;
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --fontFira: 'Fira Sans', sans-serif;
  --fontPopins: 'Poppins', sans-serif;
}
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }

  body,#root{
    width: 100%;
    height: 100vh
  }
  
  input,button{
    border:none;
    outline: none;
  }

  button{
    cursor: pointer;
  }
  body,input,button,a,textarea{
    font-family:var(--fontPopins);
  }
  a {
      text-decoration: none;
      color: inherit;
    }
`;

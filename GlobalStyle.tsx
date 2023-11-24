import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
 }


 :root{
   --dark-grey: #333333;
   --light-grey: #ebe3e3;
   --yellow: #FFB612;
   --red: #dc0a17;
   --green: #2FC022;
 }
`;

export default GlobalStyle;

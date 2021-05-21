import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  /* --primary : #f73535; */

  --primary : #f73535;
  --secondary : #f3f3f3;
  --tertiary : #ffa4a4;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body,
input,
button,
textarea {
  font-family: Roboto, sans-serif;
}

body {
  background-color: #e4e7ef;
}
`;

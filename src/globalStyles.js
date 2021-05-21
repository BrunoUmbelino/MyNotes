import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --primary : #c52f2f;
  --secondary : #c4c3f0;
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

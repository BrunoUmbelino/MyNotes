import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  /* --primary : #f73535; */

  --primary : #F83839;
  --white : #fafafa;
  --black : #333333;
  --tertiary : #f83838d1;
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
  background-color: #92b5b9;
}
`;

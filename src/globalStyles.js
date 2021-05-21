import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  /* --primary : #f73535; */

  --primary : #1098ad;
  --white : #fafafa;
  --black : #636363;
  --tertiary : #66d9e8;
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

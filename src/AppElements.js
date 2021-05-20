import styled from "styled-components";

export const AppWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: unset;
    padding: 30px 15px;
  }
`;
export const Main = styled.main`
  flex: 1;
  margin-left: 350px;

  @media screen and (max-width: 900px) {
    margin-left: 0;
  }
`;

export const ListNotes = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  list-style: none;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

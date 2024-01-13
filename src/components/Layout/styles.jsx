import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  color: ${(props) => props.theme.colors.texts};


  width: 100vw;
  height: 100vh;
`;

export const Main = styled.main`
  width: 85%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.background_color};
  color: ${(props) => props.theme.colors.texts};

  border: 1px solid limegreen;

  overflow: auto;
`;

export const Aside = styled.aside`
  width: 15%;
  height: 100vh;


  background: #1A1E2A;

`

export const Brand = styled.h1`
  text-align: center;
  padding: 20px;
  color: ${(props) => props.theme.colors.primary};
`
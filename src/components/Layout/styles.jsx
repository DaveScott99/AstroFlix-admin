import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

export const Main = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.background_color};
  color: ${(props) => props.theme.colors.texts};
`;
import { styled } from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
`;

export const ImagesContainer = styled.div`
  width: 50%;
  margin-left: 10px;
`;

export const Card = styled.div`
  margin-bottom: 20px;
`;

export const ImageList = styled.div`
  height: 400px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  overflow: auto;
  overflow-x: hidden;
  padding: 20px;
  border-radius: 0px 10px;
`;

export const ImageContainer = styled.div`
  width: 320px;
  height: 200px;
  cursor: pointer;
  padding: 5px;

  position: relative;

  svg {
    width: 80px;
    height: max-content;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    margin: auto;
  }
`;

export const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 30px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.div`
  font-size: 1.6em;
  margin-bottom: 30px;
  margin-top: 10px;
  font-weight: 400;

  display: flex;
  justify-content: space-between;
`;

export const ButtonNew = styled.button`
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 20px;
  border: none;
  background: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  color: #fff;
`;

export const MovieList = styled.div`
  border-radius: 50px;
  width: 50%;
`;

export const Content = styled.div`
  padding: 15px 0px;
  border-radius: 5px;
      
  form {
  }

  .form--item {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }

  .form--label {
    font-size: 1em;
    margin-bottom: 10px;
  }

  .form--input {
    padding: 10px;
    border-radius: 5px;
    outline: none;
    font-size: 0.9em;
    border: 1px solid black;
  }

  .form--file {
    border: 1px solid black;
  }

  .form--textarea {
    height: 200px;
  }

  .form--buttons {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .form--button {
    padding: 10px 30px;
    margin-right: 10px;
    margin-left: 10px;
    font-size: 0.9em;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    color: #fff;
    font-weight: 600;
  }

  .create {
    background: ${(props) => props.theme.colors.primary};
  }

  .cancel {
    background: #000;
  }

  .form--images {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Header = styled.div`
  padding: 10px;
  background: #20283d;
  color: #fff;
  border-radius: 5px 5px 0px 0px;
`;

export const LogoInput = styled.label`
  width: 400px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  background: ${(props) => props.theme.colors.white_smoke};
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.8;
  }
`;

export const PosterInput = styled.label`
  width: 220px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  background: ${(props) => props.theme.colors.white_smoke};
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 50px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const Preview = styled.span``;

export const Image = styled.img`
  width: 400px;
  background-size: cover;
  border-radius: 5px;
`;

export const PosterImage = styled.img`
  width: 220px;
  height: 300px;
  background-size: cover;
  border-radius: 5px;
`;

export const ButtonUpload = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  svg {
    font-size: 2em;
    color: ${(props) => props.theme.colors.black};
  }

  span {
    font-size: 1em;
    font-weight: 400;
    color: ${(props) => props.theme.colors.black};
  }
`;

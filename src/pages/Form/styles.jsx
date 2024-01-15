import { styled } from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1.6em;
  margin-bottom: 30px;
  margin-top: 10px;
  font-weight: 400;

  display: flex;
  justify-content: space-between;
`

export const ButtonNew = styled.button`
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 20px;
  border: none;
  background: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  color: #FFF;
`

export const MovieList = styled.div`
  border-radius: 50px;
`

export const Content = styled.div`
  padding: 20px;
  background: #FFF;
  border-radius: 5px;

  form{ 
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
    font-size: .9em;
    border: 1px solid black;
  }

  .form--file {
    border: 1px solid black;
  }

  .form--textarea {
    height: 200px;
  }

  .form--buttons{
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .form--button {
    padding: 10px 30px;
    margin-right: 10px;
    margin-left: 10px;
    font-size: .9em;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    color: #FFF;
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
`

export const Header = styled.div`
  padding: 10px;
  background: #20283D;
  color: #FFF;
  border-radius: 5px 5px 0px 0px;
`

export const LogoInput = styled.label`
    width: 400px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    background: ${props => props.theme.colors.white_smoke};
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;

    &:hover {
        opacity: .8;
    }
`

export const PosterInput = styled.label`
    width: 220px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    background: ${props => props.theme.colors.white_smoke};
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 50px;

    &:hover {
        opacity: .8;
    }
`

export const Input = styled.input`
    display: none;
`

export const Preview = styled.span`

`

export const Image = styled.img`
    width: 400px;
    background-size: cover;
    border-radius: 5px;
`

export const PosterImage = styled.img`
    width: 220px;
    height: 300px;
    background-size: cover;
    border-radius: 5px;
`

export const ButtonUpload = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    svg {
        font-size: 2em;
        color: ${props => props.theme.colors.black};
    }

    span {
        font-size: 1em;
        font-weight: 400;
        color: ${props => props.theme.colors.black};
    }
`
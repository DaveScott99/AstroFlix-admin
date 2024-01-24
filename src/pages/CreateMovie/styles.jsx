import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1470px;
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1470px;
`

export const Title = styled.span`
  font-weight: 500;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  font-size: 1.7em;

  .button {
    padding: 10px 20px;
    border: none;
    background: none;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-size: .6em;
    font-weight: 600;
    border-radius: 20px;
    color: #FFF;
    transition: all .1s ease;

    &:hover {
      opacity: .7;
    }

  }
  .back-button {
    background: red;
    svg {
      font-size: 1.3em;
      margin-right: 5px;
    }
  }

  .create-button {
    background: green;
  }
`

export const ContainerButtons = styled.div`

`

export const Line = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 70px;
`

export const Search = styled.input`
  padding: 10px;
  font-size: 1.2em;
  outline: none;
  width: 800px;
  margin-bottom: 20px;
`


export const Card = styled.div`
  cursor: pointer;
  border-radius: 10px;
  position: relative;

  svg {
    width: 120px;
    height: max-content;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    margin: auto;
  }
`

export const CardCover = styled.img`
  width: 233px;
  height: 352px;
  border-radius: 10px;
  transition: transform .3s ease;

  &:hover {
    transform: scale(1.15);
  }
`

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 50px;
  justify-content: center;
  justify-items: center;
  width: 100%;
  padding: 30px;
`

export const FormCreateContainer = styled.div`
  display: flex;
  flex-direction: column;
`
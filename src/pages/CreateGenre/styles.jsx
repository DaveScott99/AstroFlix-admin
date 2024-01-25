import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1470px;
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
`;

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
    padding: 10px 15px;
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

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;

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
    width: 400px;
  }

`
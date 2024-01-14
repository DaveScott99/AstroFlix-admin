import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFF;

  padding: 15px;
  width: 90%;

  border-radius: 0px 0px 5px 5px;

  margin-bottom: 20px;
`

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Photo = styled.img`
    width: 35px;
    border-radius: 3px;
`

export const Name = styled.span`
  margin-left: 5px;
  font-size: 1em;
`

export const Website = styled.div`
  font-size: 1em;
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 1.2em;
    margin-right: 5px;
  }
`
import { styled } from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1470px;
  display: flex;
  justify-content: center;
  justify-items: center;
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
`

export const Header = styled.div`
  padding: 10px;
  background: #20283D;
  color: #FFF;
  border-radius: 5px 5px 0px 0px;
`

export const Table = styled.div`
  width: 100%;
`

export const ShowAndSearch = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Show = styled.div`
  select {
    width: 70px;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 8px;
    border-radius: 2px;
    border: 1px solid #00000030;
  }
`

export const Search = styled.div`

`

export const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #00000030;
  outline: none;
  font-size: .9em;
  border-radius: 2px;
`

export const TableHead = styled.div`
  display: flex;
  font-weight: bold;
  font-size: .9em;

  #id {
    width: 400px;
  }

  #title {
    width: 3000px;
  }

`

export const TableItem = styled.div`
  border: 1px solid #00000010;
  width: 100%;
  padding: 10px 7px;
`

export const FooterTable = styled.div`
  bottom: 1px solid red;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`

export const Itens = styled.div`
  font-size: .9em;
  color: #a1a1a1;
`

export const Pages = styled.div`

  button {
    padding: 5px 10px;
    border: 1px solid #00000010;
    margin-right: 5px;
    border-radius: 5px;
    background: #FFF;
    cursor: pointer;
   }

`
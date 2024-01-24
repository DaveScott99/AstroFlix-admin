import React from "react";
import { Container, Content, FooterTable, Header, Item, Itens, MovieList, Pages, Search, SearchInput, Show, ShowAndSearch, Table, TableBody, TableHead, TableItem, Title } from "./styles";

export default function User() {
    return(
        <Container>
             <Title>
                
                Manage Users

             </Title>

            <MovieList>
                <Header>
                    Users
                </Header>
            <Content>
                <Table>

                    <ShowAndSearch>
                        <Show>
                            Show 
                            <select>
                                <option selected>10</option>
                                <option>30</option>
                            </select>
                            entries
                        </Show>

                        <Search>
                            Search: <SearchInput type="text" name="search-movie"/>
                        </Search>
                    </ShowAndSearch>

                    <TableHead>
                        <TableItem id="id">#</TableItem>
                        <TableItem id="title">Name</TableItem>
                        <TableItem>Email</TableItem>
                        <TableItem>Operation</TableItem>
                    </TableHead>

                    <TableBody>
                        <Item id="id">1</Item>
                        <Item id="title">Davi</Item>
                        <Item>davi@gmail.com</Item>
                        <Item>
                            <button className="edit--button">Edit</button>
                            <button className="delete--button">Delete</button>
                        </Item>
                    </TableBody>

                    <FooterTable>
                        <Itens>
                            Showing 0 to 0 of 0 entries
                        </Itens>

                        <Pages>
                            <button className="previus--button">
                                Previus
                            </button>
                            <button className="next--button">
                                Next
                            </button>
                        </Pages>
                    </FooterTable>

                </Table>
            </Content>
              
            </MovieList>

        </Container>
    );
}
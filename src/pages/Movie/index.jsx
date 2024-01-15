import React from "react";
import { ButtonNew, Container, Content, FooterTable, Header, Itens, MovieList, Pages, Search, SearchInput, Show, ShowAndSearch, Table, TableHead, TableItem, Title } from "./styles";
import { Link } from "react-router-dom";

export default function Movie() {
    return(
        <Container>
             <Title>
                
                Manage movies

                <Link to="/create">
                    <ButtonNew>+ Create movie</ButtonNew>
                </Link>

             </Title>

            <MovieList>
                <Header>
                    Movie List
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
                        <TableItem id="title">Movie Title</TableItem>
                        <TableItem>Genre</TableItem>
                        <TableItem>Operation</TableItem>
                    </TableHead>

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
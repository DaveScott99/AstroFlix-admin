import React from "react";
import { ButtonNew, Container, Content, FooterTable, Header, Item, Itens, MovieList, Pages, Search, SearchInput, Show, ShowAndSearch, Table, TableBody, TableHead, TableItem, Thumbnail, Title } from "./styles";
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
                        <TableItem id="thumbnail"></TableItem>
                        <TableItem id="title">Movie Title</TableItem>
                        <TableItem>Genre</TableItem>
                        <TableItem>Operation</TableItem>
                    </TableHead>

                    <TableBody>
                        <Item id="id">1</Item>
                        <Item id="thumbnail"><Thumbnail src="https://images.universohq.com/2014/08/TheFlashBanner.jpg" /></Item>
                        <Item id="title">The Flash</Item>
                        <Item>Ficção</Item>
                        <Item>
                            <button className="media--button">Media</button>
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
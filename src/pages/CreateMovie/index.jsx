import React, { useState } from "react";
import {
  Card,
  CardCover,
  Container,
  ContainerButtons,
  ContainerCards,
  Content,
  FormCreateContainer,
  Header,
  Search,
  Title,
} from "./styles";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { ReactComponent as Check } from "../../assets/check.svg";
import Form from "../../components/Form";
import Loading from "../../components/Loading";
import { searchMovieByTittle } from "../../services/TmdbService";
import { useQuery } from "@tanstack/react-query";

export default function CreateMovie() {
  const [movieList, setMovieList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const handleCancelNewMovie = () => {
    setSelectedItem("")
    const newMovieForPublish = {
      title: "",
      trailer: "",
      logo: "",
      backdrop: "",
      thumbnail: "",
      duration: "",
      longDescription: "",
      shortDescription: "",
      genres: [],
      productionCompanie: "",
      country: "",
      releaseDate: "",
      cast: []
    }
    localStorage.setItem("current-newMovie", JSON.stringify(newMovieForPublish));
  }

  const { isLoading, isFetching } = useQuery(
    [searchInput],
    async () => {
      const movies = await searchMovieByTittle(searchInput);
      setMovieList(movies.data.results);
      return movies;
    },
    {
      cacheTime: 60*2
    }
  );

  return (
    <Container>
      <Header>
        {selectedItem ? (
          <button className="button back-button" onClick={handleCancelNewMovie}>
            {" "}
            <HiArrowNarrowLeft />
            Voltar
          </button>
        ) : null}

        <Title>
          Create Movie
        </Title>

        {selectedItem ? (
          <ContainerButtons>
            <button className="button create-button">Create</button>
          </ContainerButtons>
        ):
        null
        }
      </Header>

      {!selectedItem ? (
        <Content>
          <Search
            type="text"
            name="movie-title"
            placeholder="Movie title"
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <ContainerCards>
            {movieList.map((item) => (
              <Card
                key={item.id}
                onClick={() => setSelectedItem(item.id)}
                style={{ opacity: selectedItem === item.id ? ".8" : "1" }}
              >
                <CardCover
                  style={{
                    transform: selectedItem === item.id ? "scale(1.15)" : "",
                  }}
                  src={`https://image.tmdb.org/t/p/w300` + item.poster_path}
                />

                {selectedItem === item.id ? <Check /> : null}
              </Card>
               
            ))}
            {isFetching && <Loading color="#FFF" />}
          </ContainerCards>
        </Content>
      ) : (
        <FormCreateContainer>
          <Form mediaData={selectedItem} />
        </FormCreateContainer>
      )}

    </Container>
  );
}

import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Content,
  Header,
  ImageContainer,
  ImageItem,
  ImageList,
  ImagesContainer,
  MovieList,
} from "./styles";
import Select from "react-select";
import { ReactComponent as Check } from "../../assets/check.svg";
import { useQuery } from "@tanstack/react-query";
import { getMovieBackdrop, getMovieData, getMovieThumbnailAndLogo, getMovieVideo } from "../../services/TmdbService";
import Loading from "../Loading";

export default function Form({ mediaData }) {
  const [mediaBackDrops, setMediaBackDrops] = useState([]);
  const [mediaLogoThumb, setMediaLogoThumb] = useState([]);
  const [movieState, setMovieState] = useState({
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
  });
  
  const { isLoading, isFetching } = useQuery(
    [mediaData],
    async () => {
      const media = await getMovieData(mediaData);
      const backdrops = await getMovieBackdrop(mediaData);
      const thumbnailAndLogo = await getMovieThumbnailAndLogo(mediaData);
      const trailer = await getMovieVideo(mediaData);
      let selectedTrailer = trailer.data.results.filter(i => i.type === "Trailer")

      let newMovie = {
        title: media.data?.title,
        trailer: selectedTrailer[0]?.key,
        logo: "",
        backdrop: "",
        thumbnail: "",
        duration: media.data?.runtime,
        longDescription: media.data?.overview,
        shortDescription: media.data?.tagline,
        genres: media.data?.genres,
        productionCompanie: media.data?.production_companies[0].name,
        country: media.data?.production_countries[0].name,
        releaseDate: media.data?.release_date,
      }

      localStorage.setItem("current-newMovie", JSON.stringify(newMovie));

      const storedMovie = JSON.parse(localStorage.getItem("current-newMovie"));

      if (storedMovie) {
        setMovieState(storedMovie);
      }

      setMediaBackDrops(backdrops.data);
      setMediaLogoThumb(thumbnailAndLogo.data);
    },
    {
      cacheTime: 60*2
    }
  );

  const handleOnChangeMovieData = (e, key) => {
    const changedData = { ...movieState, [key]: e.target.value };

    localStorage.setItem('current-newMovie', JSON.stringify(changedData))

    setMovieState(changedData);
  };

  const handleSelectImages = (image, key) => {
    const changedData = { ...movieState, [key]: image };

    localStorage.setItem('current-newMovie', JSON.stringify(changedData))

    setMovieState(changedData);
  };

  const handleMovieForm = (e) => {
    e.preventDefault();
    console.log(movieState);
  };

  if (isLoading) {
    return <Loading color="#FFF" />
  }

  return (
    <Container>
      <ImagesContainer>


        <Card>
          <Header>Select logo image</Header>
          
          <ImageList>
            {mediaLogoThumb.logos?.map((item) => (
              <ImageContainer onClick={() => handleSelectImages(item.file_path, "logo")}
              >
                <ImageItem
                  style={{
                    transform: movieState.logo === item.file_path ? "scale(1.15)" : "",
                  }}
                  src={`https://image.tmdb.org/t/p/original` + item.file_path}
                />

                {movieState.logo === item.file_path ? <Check /> : null}

              </ImageContainer>
            ))}
          </ImageList>
        </Card>

        <Card>
          <Header>Select backdrop image</Header>

          <ImageList>
            {mediaBackDrops.backdrops?.map((item) => (
              <ImageContainer onClick={() => handleSelectImages(item.file_path, "backdrop")}>
                <ImageItem
                  style={{
                    transform: movieState.backdrop === item.file_path ? "scale(1.15)" : "",
                  }}
                  src={`https://image.tmdb.org/t/p/original` + item.file_path}
                />

                  {movieState.backdrop === item.file_path ? <Check /> : null}
              </ImageContainer>
            ))}
          </ImageList>
        </Card>

        <Card>
          <Header>Select thumbnail image</Header>

          <ImageList>
            {mediaLogoThumb.backdrops?.map((item) => (
              <ImageContainer onClick={() => handleSelectImages(item.file_path, "thumbnail")}>
                <ImageItem
                 style={{
                  transform: movieState.thumbnail === item.file_path ? "scale(1.15)" : "",
                  }}
                  src={`https://image.tmdb.org/t/p/original` + item.file_path}
                />
                {movieState.thumbnail === item.file_path ? <Check /> : null}
              </ImageContainer>
            ))}
          </ImageList>
        </Card>
             
      </ImagesContainer>
 

      <MovieList>
        <Header>Movie Create</Header>

        <Content>
          <form onSubmit={handleMovieForm}>
            <div className="form--item">
              <label className="form--label">Movie Title *</label>
              <input
                className="form--input"
                type="text"
                name="title"
                value={movieState.title}
                onChange={(e) => handleOnChangeMovieData(e, "title")}
                required
              />
            </div>
            <div className="form--item">
              <label className="form--label">
                Trailer *
              </label>
              <input
                className="form--input"
                type="text"
                name="trailer"
                value={movieState.trailer}
                onChange={(e) => handleOnChangeMovieData(e, "trailer")}
                required
              />
            </div>

            <div className="form--item">
              <label className="form--label">Duration *</label>
              <input
                className="form--input"
                type="text"
                name="duration"
                value={movieState.duration}
                onChange={(e) => handleOnChangeMovieData(e, "duration")}
                required
              />
            </div>
            <div className="form--item">
              <label className="form--label">Long description *</label>
              <textarea
                className="form--input form--textarea"
                style={{ height: "100px" }}
                type="text"
                name="longDescritpion"
                value={movieState.longDescription}
                onChange={(e) => handleOnChangeMovieData(e, "longDescription")}
                required
              />
            </div>
            <div className="form--item">
              <label className="form--label">Short description *</label>
              <textarea
                className="form--input form--textarea"
                style={{ height: "70px" }}
                type="text"
                name="shortDescription"
                value={movieState.shortDescription}
                onChange={(e) => handleOnChangeMovieData(e, "shortDescription")}
                required
              />
            </div>
            <div className="form--item">
              <label className="form--label">Production Companie</label>
              <input
                className="form--input"
                type="text"
                name="productionCompanie"
                value={movieState.productionCompanie}
                onChange={(e) => handleOnChangeMovieData(e, "productionCompanie")}
                required
              />
            </div>

            <div className="form--item">
              <label className="form--label">Country</label>
              <input
                className="form--input"
                type="text"
                name="country"
                value={movieState.country}
                onChange={(e) => handleOnChangeMovieData(e, "country")}
                required
              />
            </div>

            <div className="form--item">
              <label className="form--label">
                Genre - genre must be selected
              </label>


              <Select 
                options={movieState.genres}
                isMulti
                value={movieState.genres}
                getOptionLabel={(genre) => genre.name}
                getOptionValue={(genre) => genre.id}
              />

            </div>


            <div className="form--item">
              <label className="form--label">
                Release date
              </label>
              <input className="form--input" type="text" name="releaseDate" value={movieState.releaseDate} />
            </div>

            {/*
            <div className="form--buttons">
              <Link to="/movie">
                <button className="form--button cancel">Cancel</button>
              </Link>
              <button className="form--button create">Create Movie</button>
            </div>

              */}
          </form>
        </Content>
      </MovieList>
    </Container>
  );
}

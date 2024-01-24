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
import Tmdb from "../../util/Tmdb";
import Select from "react-select";
import { ReactComponent as Check } from "../../assets/check.svg";

export default function Form({ mediaData }) {
  const [movieImages, setMovieImages] = useState([]);
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
  
  useEffect(() => {
    const loadAll = async () => {

      let media = await Tmdb.getMovieInfo(mediaData, "movie");
      let images = await Tmdb.getMovieImages(mediaData);
      let videos = await Tmdb.getMovieVideo(mediaData);
      let selectedTrailer = videos[0].items.results.filter(i => i.type === "Trailer")

      let newMovie = {
        title: media?.title,
        trailer: selectedTrailer[0]?.key,
        logo: "",
        backdrop: "",
        thumbnail: "",
        duration: media?.runtime,
        longDescription: media?.overview,
        shortDescription: media?.tagline,
        genres: media?.genres,
        productionCompanie: media?.production_companies[0].name,
        country: media?.production_countries[0].name,
        releaseDate: media?.release_date,
      }

      localStorage.setItem("current-newMovie", JSON.stringify(newMovie));

      const storedMovie = JSON.parse(localStorage.getItem("current-newMovie"));

      if (storedMovie) {
        setMovieState(storedMovie);
      }

      setMovieImages(images);
    };
    loadAll();
  }, [mediaData]);

  const handleOnChangeMovie = (e, key) => {
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

  return (
    <Container>
      <ImagesContainer>
        <Card>
          <Header>Select logo image</Header>

          <ImageList>
            {movieImages[1]?.items.logos.map((item) => (
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
            {movieImages[0]?.items.backdrops.map((item) => (
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
            {movieImages[1]?.items.backdrops.map((item) => (
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
                onChange={(e) => handleOnChangeMovie(e, "title")}
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
                onChange={(e) => handleOnChangeMovie(e, "trailer")}
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
                onChange={(e) => handleOnChangeMovie(e, "duration")}
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
                onChange={(e) => handleOnChangeMovie(e, "longDescription")}
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
                onChange={(e) => handleOnChangeMovie(e, "shortDescription")}
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
                onChange={(e) => handleOnChangeMovie(e, "productionCompanie")}
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
                onChange={(e) => handleOnChangeMovie(e, "country")}
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

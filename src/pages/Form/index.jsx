import React, { useState } from "react";
import {
  ButtonUpload,
  Container,
  Content,
  Header,
  Image,
  Input,
  LogoInput,
  MovieList,
  PosterImage,
  PosterInput,
  Preview,
  Title,
} from "./styles";
import { Link } from "react-router-dom";
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function Form() {
  const [movieState, setMovieState] = useState({
    title: "",
    trailer: "",
    logo: "",
    poster: "",
    duration: "",
    longDescription: "",
    shortDescription: "",
  });

  const [previewLogo, setPreviewLogo] = useState(null);
  const [previewPoster, setPreviewPoster] = useState(null);

  const handleOnChangeMovie = (e, key) => {
    setMovieState({ ...movieState, [key]: e.target.value });
  };

  const handleMovieForm = (e) => {
    e.preventDefault();
    console.log(movieState);
  };

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    setMovieState({ ...movieState, ["logo"]: file });

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewLogo(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewLogo(null);
    }
  };

  const handlePosterChange = (event) => {
    const file = event.target.files[0];
    setMovieState({ ...movieState, ["poster"]: file });

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewPoster(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewPoster(null);
    }
  };

  return (
    <Container>
      <Title>Create Movie</Title>

      <MovieList>
        <Header>Movie Create</Header>

        <Content>
          <form onSubmit={handleMovieForm}>
            <div className="form--images">
              <LogoInput>
                <Input
                  type="file"
                  accept="image/jpeg, image/png"
                  onChange={handleLogoChange}
                />

                <Preview>
                  {previewLogo ? (
                    <Image src={previewLogo} alt="Preview" />
                  ) : (
                    <ButtonUpload>
                      <AiOutlineCloudUpload />
                      <span>Logo - icon image of the movie</span>
                    </ButtonUpload>
                  )}
                </Preview>
              </LogoInput>

              <PosterInput>
                <Input
                  type="file"
                  accept="image/jpeg, image/png"
                  onChange={handlePosterChange}
                />

                <Preview>
                  {previewPoster ? (
                    <PosterImage src={previewPoster} alt="Preview" />
                  ) : (
                    <ButtonUpload>
                      <AiOutlineCloudUpload />
                      <span>Poster - large banner image of the movie</span>
                    </ButtonUpload>
                  )}
                </Preview>
              </PosterInput>
            </div>
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
                Movie Trailer Url - youtube or any hosted video *
              </label>
              <input
                className="form--input"
                type="url"
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
                placeholder="-- : -- : --"
                value={movieState.duration}
                onChange={(e) => handleOnChangeMovie(e, "duration")}
                required
              />
            </div>
            <div className="form--item">
              <label className="form--label">Long description *</label>
              <textarea
                className="form--input form--textarea"
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
                type="text"
                name="shortDescription"
                value={movieState.shortDescription}
                onChange={(e) => handleOnChangeMovie(e, "shortDescription")}
                required
              />
            </div>
            <div className="form--item">
              <label className="form--label">
                Director - select single director
              </label>
              <select className="form--input" name="director">
                <option selected>Select an Director</option>
              </select>
            </div>
            <div className="form--item">
              <label className="form--label">
                Actors - select multiple actors
              </label>
              <select className="form--input" name="actor">
                <option selected>Select multiple Actors</option>
              </select>
            </div>
            <div className="form--item">
              <label className="form--label">Country</label>
              <select className="form--input" name="country">
                <option selected>Select an Country</option>
              </select>
            </div>
            <div className="form--item">
              <label className="form--label">
                Genre - genre must be selected
              </label>
              <select className="form--input" name="genre">
                <option selected>Select an Genre</option>
              </select>
            </div>
            <div className="form--item">
              <label className="form--label">
                Publishing Year - year of publishing time
              </label>
              <input className="form--input" type="number" name="txtYear" />
            </div>
            <div className="form--item">
              <label className="form--label">
                Rating - star rating of the movie
              </label>
              <select className="form--input" name="genre">
                <option selected>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div className="form--buttons">
              <Link to="/movie">
                <button className="form--button cancel">Cancel</button>
              </Link>
              <button className="form--button create">Create Movie</button>
            </div>
          </form>
        </Content>
      </MovieList>
    </Container>
  );
}

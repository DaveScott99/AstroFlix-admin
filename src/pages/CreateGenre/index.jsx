import React, { useEffect, useState } from "react";
import {
  Container,
  FormContainer,
  Header,
  Title,
} from "./styles";
import { HiArrowNarrowLeft } from "react-icons/hi";


export default function CreateGenre() {

  const handleGenreForm = (e) => {
    e.preventDefault();
    console.log("Form");
  };

  return (
    <Container>
      <Header>
          <button className="button back-button">
            {" "}
            <HiArrowNarrowLeft />
            Voltar
          </button>
        <Title>
          Create Genre
        </Title>
        <button className="button create-button">Create</button>
      </Header>

      <FormContainer>
        <form onSubmit={handleGenreForm}>
          <div className="form--item">
            <label className="form--label">Name</label>
            <input
              className="form--input"
              type="text"
              name="Name"
              required
            />
          </div>
        </form>
      </FormContainer>

    </Container>
  );
}

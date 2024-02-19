import { ArtDTO } from "./artDTO";
import { Genre } from "./genre";

export type MediaMinDTO = {
  id: number;
  title: string;
  logo: string;
  releaseYear: number;
  genres: Genre[];
  active: boolean;
  poster: ArtDTO;
}
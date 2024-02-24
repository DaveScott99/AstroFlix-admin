import { ArtDTO } from "./artDTO";
import { Genre } from "./genre";

export interface Media {
    id: number;
    idTMDB: number;
    title: string;
    runtime: number;
    overview: string;
    tagline: string;
    genres: Genre[];
    releaseYear: number;
    active: boolean;
    adult: boolean;
    poster: ArtDTO;
    logo: ArtDTO;
    backdrop: ArtDTO;
}
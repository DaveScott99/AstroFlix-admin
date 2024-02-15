import { Genre } from "./genre";

export interface Media {
    id: number;
    title: string;
    logo: string;
    parentalAdvisory: string;
    genre: Genre[];
    year: number;
    language: string;
    status: boolean;
}
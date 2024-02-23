import axios from "axios";

export const ASTROFLIX_API = axios.create({
    baseURL: import.meta.env.VITE_ASTROFLIX_API_URL,
})

export const TMDB_API = axios.create({
    baseURL: import.meta.env.VITE_TMDB_API_URL,
})
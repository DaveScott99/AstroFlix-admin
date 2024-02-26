import axios from "axios";

export const ASTROFLIX_API = axios.create({
    baseURL: "http://localhost:8763",
})

export const TMDB_API = axios.create({
    baseURL: import.meta.env.VITE_TMDB_API_URL,
})
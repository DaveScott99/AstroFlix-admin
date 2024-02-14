import axios from "axios";




export const TMDB_API = axios.create({
    baseURL: process.env.REACT_APP_TMDB_API_URL,
})

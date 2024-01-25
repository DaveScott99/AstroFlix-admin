import axios from "axios";

const TMDB_API_KEY = process.env.REACT_APP_TMDB_KEY;

export const TMDB_API = axios.create({
    baseURL: process.env.REACT_APP_TMDB_API_URL,
})

export const searchMovieByTittle = async (title) => {
    try {
        return await TMDB_API.get(`/search/movie?query=${title}&include_adult=false&language=en-US&api_key=${TMDB_API_KEY}`)
    }
    catch (err) {
        console.error("Error to load movie:", err)
    }
}

export const getMovieBackdrop = async (movieId) => {
    try {
        return await TMDB_API.get(`/movie/${movieId}/images?language=null&api_key=${TMDB_API_KEY}`);
    }
    catch (err) {
        console.error("Error to load movie backdrops: ", err);
    }
}

export const getMovieThumbnailAndLogo = async (movieId) => {
    try {
        return await TMDB_API.get(`/movie/${movieId}/images?language=en&api_key=${TMDB_API_KEY}`);
    }
    catch (err) {
        console.error("Error to load movie thumbnail and logo: ", err);
    }
}

export const getMovieVideo = async (movieId) => {
    try {
        return await TMDB_API.get(`/movie/${movieId}/videos?language=en-US&api_key=${TMDB_API_KEY}`);
    }
    catch (err) {
        console.error("Error to load movie video: ", err);
    }
}

export const getMovieData = async (movieId) => {
    try {
        return await TMDB_API.get(`/movie/${movieId}?language=en-US&api_key=${TMDB_API_KEY}`);
    }
    catch (err) {
        console.error("Error to load movie video: ", err);
    }
}

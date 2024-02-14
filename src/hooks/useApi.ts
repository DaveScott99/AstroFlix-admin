import axios from "axios";

const TMDB_API_KEY = import.meta.env.VITE_TMDB_KEY;

const TMDB_API = axios.create({
    baseURL: import.meta.env.VITE_TMDB_API_URL,
})

export const useApi = () => ({

    searchMovieByTitle: async (title: string) => {
        return await TMDB_API.get(`/search/movie?query=${title}&include_adult=false&language=en-US&api_key=${TMDB_API_KEY}`)
    },
    
    findMovieById: async (movieId: number) => {
        return await TMDB_API.get(`/movie/${movieId}?language=en-US&api_key=${TMDB_API_KEY}`);
    },

    getMovieTrailers: async (movieId: number) => {
        return await TMDB_API.get(`/movie/${movieId}/videos?language=en-US&api_key=${TMDB_API_KEY}`);
    },

    getMovieArts: async (movieId: number) => {
        return await TMDB_API.get(`/movie/${movieId}/images?include_image_language=en%2C%20null&api_key=${TMDB_API_KEY}`);
    },
    
})
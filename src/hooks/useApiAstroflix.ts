import axios from "axios";

const ASTROFLIX_API = axios.create({
    baseURL: import.meta.env.VITE_ASTROFLIX_API_URL,
})

export const useApiAstroflix = () => ({
    createMovie: async (movieBody: any) => {
        return await ASTROFLIX_API.post("/media/movie", movieBody)
    }
})
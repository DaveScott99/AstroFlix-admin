import axios from "axios";

export const ASTROFLIX_API = axios.create({
    baseURL: import.meta.env.VITE_ASTROFLIX_API_URL,
})

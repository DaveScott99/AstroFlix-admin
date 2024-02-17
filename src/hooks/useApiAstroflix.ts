import axios, { AxiosResponse } from "axios";
import React from 'react';

const ASTROFLIX_API = axios.create({
    baseURL: import.meta.env.VITE_ASTROFLIX_API_URL,
})

export function useApiAstroflix() {
    const [data, setData] = React.useState<AxiosResponse>();
    const [isFetching, setIsFetching] = React.useState(true);
    const [error, setError] = React.useState<Error | null>()

    const methods = {
        createMovie: async (movieBody: any) => {
            await ASTROFLIX_API.post("/media/movie", movieBody)
                .then(response => {
                    setData(response);
                })
                .catch(err => {
                    setError(err);
                })
                .finally(() => {
                    setIsFetching(false);
                })
        },
        
        addGenre: async (id: number, genre: any) => {
            await ASTROFLIX_API.post(`/media/movie/add/genre?mediaId=${id}`, genre)
                .then(response => {
                    setData(response);
                })
                .catch(err => {
                    setError(err);
                })
                .finally(() => {
                    setIsFetching(false);
                })
        }

    }

    return {
        methods,
        data,
        isFetching,
        error
    }

}
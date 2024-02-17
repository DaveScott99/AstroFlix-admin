import { useState, useEffect } from "react"
import axios from "axios";

const ASTROFLIX_API = axios.create({
    baseURL: import.meta.env.VITE_ASTROFLIX_API_URL,
})

export function useSearchAstroflix<T = unknown>(path: string) {

    const [data, setData] = useState<T>();
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<Error | null>()


    useEffect(() => {

        ASTROFLIX_API.get(path)
        .then(response => {
            setData(response.data);
        })
        .catch(err => {
            setError(err);
        })
        .finally(() => {
            setIsFetching(false);
        })

    }, [])

    return {
        data,
        isFetching,
        error
    }

}
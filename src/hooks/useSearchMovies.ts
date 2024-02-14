import { useState, useEffect } from "react"
import { useApi } from "./useApi";

export function useSearchMovie<T = unknown>(query: any) {

    const [data, setData] = useState<T | null>();
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<Error | null>()

    const api = useApi();

    useEffect(() => {

        api.searchMovieByTitle(query)
        .then(response => {
            setData(response.data.results);
        })
        .catch(err => {
            setError(err);
        })
        .finally(() => {
            setIsFetching(false);
        })

    }, [query])

    return {
        data,
        isFetching,
        error
    }

}
import axios from "axios";
import { Genre } from "../types/genre";
import { useApiAstroflix } from "./useApiAstroflix";
import { useQueryClient } from "@tanstack/react-query"
import { useMutation } from "@tanstack/react-query";

export const useGenre = () => {

    const { data, error, isFetching, methods } = useApiAstroflix();

    const queryClient = useQueryClient();

    const addGenre = (id: number, genre: Genre | undefined) => {
        return useMutation({ mutationFn: () => axios.post(`http://localhost:8763/media/add/genre?mediaId=${id}`, genre)})
    }

    const handleAddGenre = (id: number, genreToAdd: Genre) => {
        //const previusGenres = queryClient.getQueryData<Genre[]>(['genres-media']);

        methods.addGenre(id, genreToAdd)

        /*
        console.log(status)

        if (previusGenres) {
            const nextGenres = [...previusGenres, genreToAdd]
            queryClient.setQueryData(['genres-media'], nextGenres);
            console.log(nextGenres);
        }
        */

    }

    const handleRemoveGenre = (id: number, genre: any) => {
        methods.removeGenre(id, genre)
    }

    return {
        data,
        isFetching,
        error,
        addGenre,
        handleAddGenre,
        handleRemoveGenre
    }

}
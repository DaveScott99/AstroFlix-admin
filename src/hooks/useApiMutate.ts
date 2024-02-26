import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ASTROFLIX_API } from "../helper/axios-instance";

export const useApiMutate = (path:string, query_key_for_invalidate?:string) => {
    const queryClient = useQueryClient();

    const {
        mutate,
        isSuccess,
        isError,
        isPending,
        error,
    } = useMutation({
        mutationFn: async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            await ASTROFLIX_API.post(path);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: [query_key_for_invalidate] });
        },
    });

    return {
        mutate,
        isSuccess,
        isPending,
        isError,
        error
    }
}
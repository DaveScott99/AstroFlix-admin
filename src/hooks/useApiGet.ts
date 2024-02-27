import { useQuery } from "@tanstack/react-query";
import { ASTROFLIX_API } from "../helper/axios-instance";

export const useApiGet = (path:string, query_key:string[]) => {

    const {
        data,
        isFetching,
        isError,
        error,
    } = useQuery<any>({
        queryKey: [query_key],
        queryFn: async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const response = await ASTROFLIX_API.get(path);
            return response.data;
        },
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60, // 1 minute
    });

    return {
        data,
        isFetching,
        isError,
        error
    }
}
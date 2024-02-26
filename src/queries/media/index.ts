import { useQuery } from "@tanstack/react-query";
import { ASTROFLIX_API } from "../../helper/axios-instance";
import { Media } from "../../types/media";

async function findAll() {
    const { data} = await ASTROFLIX_API.get('/media');
    return data.content;
}

async function findByTitle(title:string) {
    const { data} = await ASTROFLIX_API.get('/media/'+title);
    return data;
}

export function useFetchListMedias() {
    return useQuery<Media[]>({queryKey: ['media-list'], queryFn: findAll, staleTime: 1000*60, refetchOnWindowFocus: false});
}

export function useFetchMediaByTitle(title:string) {
    return useQuery<Media>({queryKey: ['selected-media', title], queryFn: () => findByTitle(title), staleTime: 1000*60, refetchOnWindowFocus: false});
}
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ASTROFLIX_API } from "../../helper/axios-instance";
import { Media } from "../../types/media";

async function findAll() {
    const { data } = await ASTROFLIX_API.get('/media');
    return data.content;
}

async function findByTitle(title: string) {
    const { data } = await ASTROFLIX_API.get('/media/' + title);
    return data;
}

async function selectImage(currentMedia: Media | undefined, imageId: number | undefined, typeImage: string) {
    await ASTROFLIX_API.post(`/media/image/select/image?mediaId=${currentMedia?.id}&imageId=${imageId}&type=${typeImage}`);
}

async function createImage(media: Media | undefined, filePath: string | undefined, type: string) {
    await ASTROFLIX_API.post(`/media/image/create?idMedia=${media?.id}&titleMedia=${media?.title}&idMediaTmdb=${media?.idTMDB}&filePath=${filePath}&type=${type}`);
}

async function findImagesByMedia(path: string) {
    const { data } = await ASTROFLIX_API.get(path);
    return data;
}

async function activeMedia(mediaId: number | undefined) {
    if (mediaId) {
        await ASTROFLIX_API.patch(`/media/active/${mediaId}`);
    }
}

async function disableMedia(mediaId: number | undefined) {
    if (mediaId) {
        await ASTROFLIX_API.patch(`/media/disable/${mediaId}`);
    }
}

async function updateMedia(mediaId: number | undefined, itemForUpdate: string) {
    if (mediaId) {
        await ASTROFLIX_API.patch(`/media/${mediaId}`, itemForUpdate);
    }
}

export function useFetchListMedias() {
    return useQuery<Media[]>({
        queryKey: ['media-list'],
        queryFn: findAll,
        staleTime: 1000 * 60,
        refetchOnWindowFocus: false
    });
}

export function useFetchMediaByTitle(title: string) {
    return useQuery<Media>({
        queryKey: ['current-media', title],
        queryFn: () => findByTitle(title.replace("-", " ")),
        staleTime: 1000 * 60,
        refetchOnWindowFocus: false
    });
}

export function useFetchImagesByMedia(path: string, queryKeys: string[]) {
    return useQuery<any>({
        queryKey: [queryKeys],
        queryFn: () => findImagesByMedia(path),
        refetchOnWindowFocus: false
    });
}

export function useMutateSelectImage(currentMedia: Media | undefined, imageId: number | undefined, typeImage: string, mediaTitle: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            selectImage(currentMedia, imageId, typeImage)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['current-media', mediaTitle] })
        }
    });
}

export function useMutateCreateImage(media: Media | undefined, filePath: string | undefined, type: string) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            createImage(media, filePath, type)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['images', media?.title] })
        }
    });
}

export function useMutationActiveMedia(mediaTitle: string) {
    const queryClient = useQueryClient();

    const currentMedia = queryClient.getQueryData<Media>([
        "current-media",
        mediaTitle,
    ]);


    return useMutation({
        mutationFn: async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            activeMedia(currentMedia?.id);
        },
        onSuccess: async () => {
            const nextMedia = { ...currentMedia, active: true };
            queryClient.setQueryData(['current-media', mediaTitle], nextMedia);
        }
    })

}

export function useMutationDisableMedia(mediaTitle: string) {
    const queryClient = useQueryClient();

    const currentMedia = queryClient.getQueryData<Media>([
        "current-media",
        mediaTitle,
    ]);

    return useMutation({
        mutationFn: async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            disableMedia(currentMedia?.id);
        },
        onSuccess: async () => {
            const nextMedia = { ...currentMedia, active: false };
            queryClient.setQueryData(['current-media', mediaTitle], nextMedia);
        }
    })
}

export function useMutationUpdateOverview(mediaTitle: string, overview: any) {
    const queryClient = useQueryClient();

    const currentMedia = queryClient.getQueryData<Media>([
        "current-media",
        mediaTitle,
    ]);

    return useMutation({
        mutationFn: async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            updateMedia(currentMedia?.id, overview);
        },
        onSuccess: async () => {
            const nextMedia = { ...currentMedia, overview: overview.overview };
            queryClient.setQueryData(['current-media', mediaTitle], nextMedia);
        }
    })
}

export function useMutationUpdateTagline(mediaTitle: string, tagline: any) {
    const queryClient = useQueryClient();

    const currentMedia = queryClient.getQueryData<Media>([
        "current-media",
        mediaTitle,
    ]);

    return useMutation({
        mutationFn: async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            updateMedia(currentMedia?.id, tagline);
        },
        onSuccess: async () => {
            const nextMedia = { ...currentMedia, tagline: tagline.tagline };
            queryClient.setQueryData(['current-media', mediaTitle], nextMedia);
        }
    })
}

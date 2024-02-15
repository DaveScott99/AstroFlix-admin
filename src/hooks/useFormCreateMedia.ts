import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { useApiTmdb } from "./useApiTmdb";
import { useSearchMovie } from "./useSearchMovies";
import { FormProps, MediaPropsByApi, schemaMediaForm } from "../types/create-media";
import { useApiAstroflix } from "./useApiAstroflix";
import { AxiosResponse } from "axios";

export type Media = {
    id: number,
    poster_path: string
}

export const useFormCreateMedia = () => {
    const { register, handleSubmit, formState: { errors }, setValue, watch, control } = useForm<FormProps>({
        mode: 'all',
        reValidateMode: 'onChange',
        criteriaMode: 'all',
        resolver: zodResolver(schemaMediaForm),
        defaultValues: {
            querySearch: {
                title: '',
            },
            media: {
                title: '',
                runtime: 0,
                releaseYear: 0,
                overview: '',
                tagline: '',
                isAdult: 'false',
                idTMDB: 0
            }
        }
    });
    const [formStep, setFormStep] = useState<number>(0);
    const [createResponse, setCreateResponse] = useState<AxiosResponse>();
    const api = useApiTmdb();
    const astroflixApi = useApiAstroflix();

    const { data: medias, isFetching: isFetchingMedias } = useSearchMovie<Media[]>(watch("querySearch.title"));

    const handleSetData = useCallback((data: MediaPropsByApi) => {
        setValue('media.title', data?.title);
        setValue('media.runtime', data?.runtime);
        setValue('media.overview', data?.overview)
        setValue('media.tagline', data?.tagline)
        setValue('media.idTMDB', data?.id)
        setValue('media.releaseYear', Number(data.release_date.substring(0, 4)))
    }, [setValue])

    const handleSelectMedia = useCallback(async (movieId: number) => {
        const { data } = await api.findMovieById(movieId)
        handleSetData(data)
        completeFormStep()
    }, [handleSetData])

    const handleFormSubmit = useCallback(async (data: FormProps) => {
        const media = await astroflixApi.createMovie(data.media);
        setCreateResponse(media);
        console.log(media)
    }, [])

    const selectFormStep = (step: number) => {
        setFormStep(step)
    }

    const previusFormStep = () => {
        setFormStep(cur => cur - 1);
    }

    const completeFormStep = () => {
        setFormStep(cur => cur + 1);
    }

    return {
        errors,
        register,
        formStep,
        medias,
        watch,
        control,
        createResponse,
        setValue,
        isFetchingMedias,
        handleFormSubmit,
        handleSelectMedia,
        handleSubmit,
        selectFormStep,
        completeFormStep,
        previusFormStep,
    }
}
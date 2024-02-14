import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { useApi } from "./useApi";
import { useSearchMovie } from "./useSearchMovies";
import { FormProps, MediaPropsByApi, schemaMediaForm } from "../types/create-media";

export type Media = {
    id: number,
    poster_path: string
}

export const useFormCreateMedia = () => {
    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormProps>({
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
                overview: '',
                tagline: '',
                idTmdb: 0
            }
        }
    });
    const [formStep, setFormStep] = useState<number>(0);
    const api = useApi();

    const { data: medias, isFetching: isFetchingMedias } = useSearchMovie<Media[]>(watch("querySearch.title"));

    const handleSetData = useCallback((data: MediaPropsByApi) => {
        setValue('media.title', data?.title);
        setValue('media.runtime', data?.runtime);
        setValue('media.overview', data?.overview)
        setValue('media.tagline', data?.tagline)
        setValue('media.idTmdb', data?.id)
    }, [setValue])

    const handleSelectMedia = useCallback(async (movieId: number) => {
        const { data } = await api.findMovieById(movieId)
        handleSetData(data)
        completeFormStep()
    }, [handleSetData])

    const handleFormSubmit = (data: FormProps) => {
        alert(JSON.stringify( data.media ))
        console.log({ data })
    }

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
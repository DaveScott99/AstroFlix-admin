import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { Media } from "../types/media";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutationUpdateTagline } from "../queries/media";
import { TaglineFormProps, schemaTaglineForm } from "../types/update-media";

export const useUpdateTagline= () => {

    const [editable, setEditable] = React.useState<boolean>(false);
    const params = useParams();
    const currentMediaTitle = params["title"] as string;
    const queryClient = useQueryClient();
    const currentMedia = queryClient.getQueryData<Media>([
        "current-media",
        currentMediaTitle,
    ]);

    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<TaglineFormProps>({
        mode: "all",
        reValidateMode: "onChange",
        criteriaMode: "all",
        resolver: zodResolver(schemaTaglineForm),
        defaultValues: {
            tagline: currentMedia?.tagline,
        },
    });

    const {
        mutate: mutateUpdate,
        error: errorUpdate,
        isError: isErrorUpdate,
        isPending: isPendingUpdate,
        isSuccess: isSuccessUpdate,
    } = useMutationUpdateTagline(currentMediaTitle, watch());

    React.useEffect(() => {
        setEditable(false);
    }, [isSuccessUpdate]);


    return {
        currentMedia,
        mutateUpdate,
        errorUpdate,
        isErrorUpdate,
        isPendingUpdate,
        editable,
        setEditable,
        control,
        handleSubmit,
        errors,
        isSuccessUpdate
    }
}
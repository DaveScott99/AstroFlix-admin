import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { Media } from "../types/media";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutationUpdateOverview } from "../queries/media";
import { OverviewFormProps, schemaOverviewForm } from "../types/update-media";

export const useUpdateOverview = () => {

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
    } = useForm<OverviewFormProps>({
        mode: "all",
        reValidateMode: "onChange",
        criteriaMode: "all",
        resolver: zodResolver(schemaOverviewForm),
        defaultValues: {
            overview: currentMedia?.overview,
        },
    });

    const {
        mutate: mutateUpdate,
        error: errorUpdate,
        isError: isErrorUpdate,
        isPending: isPendingUpdate,
        isSuccess: isSuccessUpdate,
    } = useMutationUpdateOverview(currentMediaTitle, watch());

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
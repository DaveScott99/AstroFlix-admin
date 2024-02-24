import { Plus } from "lucide-react";
import { Poster } from "../../components/poster";
import * as ContextMenu from "@radix-ui/react-context-menu";
import React, { useContext } from "react";
import { UtilityAreaContext } from "../../contexts/utility-area";
import { AddPoster } from "./add-poster";
import { Media } from "../../types/media";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ASTROFLIX_API } from "../../helper/axios-instance";
import { ArtDTO } from "../../types/artDTO";
import { LoadingFull } from "../../components/loading-full";
import { Toast } from "../../components/toast/toast";
import { HeaderUtilityArea } from "../../components/header-utility-area";

interface EditPosterProps {
  media: Media | undefined;
}

export function EditPoster({ media }: EditPosterProps) {
  const { selectComponent, selectHeaderUtilityArea } =
    useContext(UtilityAreaContext);

  const queryClient = useQueryClient();

  const { data, isFetching, isError, error } = useQuery<any>({
    queryKey: ["posters-media"],
    queryFn: async () => {
      const response = await ASTROFLIX_API.get("/media/art?id=" + media?.id);
      return response.data;
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60, // 1 minute
  });

  const {
    mutate,
    isSuccess: isSuccessSelectPoster,
    isError: isErrorSelectPoster,
    isPending,
    error: errorSelectPoster,
  } = useMutation({
    mutationFn: async (posterId: number) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await ASTROFLIX_API.post(
        `/media/art/select/poster?mediaId=${media?.id}&posterId=${posterId}`
      );
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["media"] });
    },
  });

  React.useEffect(() => {
    selectHeaderUtilityArea(
      <HeaderUtilityArea
        title={`${media?.title} Posters`}
        subtitle="Change poster"
        action={
          <button
            className="border rounded-full p-1 flex justify-center items-center w-10 h-10"
            onClick={() => selectComponent(<AddPoster media={media} />)}
          >
            <Plus size={24} strokeWidth={1.75} absoluteStrokeWidth />
          </button>
        }
      />
    );
  }, []);

  if (isFetching) {
    return <LoadingFull />;
  }

  return (
    <React.Fragment>
      <div className="w-full flex flex-col gap-8 justify-end items-center">
        <div className="grid grid-cols-2 gap-4">
          {data?.poster.map((poster: ArtDTO) => (
            <ContextMenu.Root key={poster.id}>
              <ContextMenu.Trigger>
                <div className="rounded-md">
                  <Poster url={poster.file} />
                </div>
              </ContextMenu.Trigger>

              <ContextMenu.Portal>
                <ContextMenu.Content className="bg-neutral-900 py-2 rounded-md w-56 flex flex-col gap-1">
                  <ContextMenu.Item
                    className=" cursor-pointer hover:bg-neutral-400/10 outline-none py-1 px-6 text-sm"
                    onClick={() => mutate(poster.id)}
                  >
                    Select poster
                  </ContextMenu.Item>
                </ContextMenu.Content>
              </ContextMenu.Portal>
            </ContextMenu.Root>
          ))}
        </div>
      </div>

      {isPending && <Toast status="loading" />}

      {isSuccessSelectPoster && (
        <Toast
          title="Success!"
          description="Poster selected!"
          status="success"
        />
      )}

      {isErrorSelectPoster && (
        <div>
          <Toast
            title="Error!"
            description={errorSelectPoster?.message}
            status="error"
          />
        </div>
      )}

      {isError && (
        <div>
          <Toast title="Error!" description={error?.message} status="error" />
        </div>
      )}
    </React.Fragment>
  );
}

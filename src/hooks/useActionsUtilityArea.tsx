import { useContext } from "react";
import { UtilityAreaContext } from "../contexts/utility-area";
import { ListImages } from "../pages/edit-media/images/list-images";
import { Plus } from "lucide-react";
import { CreateImage } from "../pages/edit-media/images/create-image";
import { useQueryClient } from "@tanstack/react-query";
import { Media } from "../types/media";
import { Details } from "../pages/edit-media/details";

export const useActionsUtilityArea = (currentMediaTitle: string) => {
  const { push } = useContext(UtilityAreaContext);
  const queryClient = useQueryClient();
  const media = queryClient.getQueryData<Media>([
    "current-media",
    currentMediaTitle,
  ]);

  const listBackdrops = () => {
    push(
      <ListImages
        list_path={`/media/image/find/backdrop?mediaId=${media?.id}`}
        type_image="backdrop"
      />,
      `Backdrops ${media?.title}`,
      [
        <button
          className="p-1 flex justify-center items-center w-8 h-8"
          onClick={() =>
            push(
              <CreateImage media={media} type="backdrop" />,
              `Create backdrop for ${media?.title}`,
              []
            )
          }
        >
          <Plus size={24} strokeWidth={1.75} absoluteStrokeWidth />
        </button>,
      ]
    );
  };

  const listPosters = () => {
    push(
      <ListImages
        list_path={`/media/image/find/poster?mediaId=${media?.id}`}
        type_image="poster"
      />,
      `Posters ${media?.title}`,
      [
        <button
          className="p-1 flex justify-center items-center w-8 h-8"
          onClick={() => 
            push(
              <CreateImage media={media} type="poster" />,
              `Create poster for ${media?.title}`,
              []
          )}
        >
          <Plus size={24} strokeWidth={1.75} absoluteStrokeWidth />
        </button>,
      ]
    );
  };

  const editMedia = () => {
    push(<Details mediaTitle={media?.title} />, `Edit ${media?.title}`, []);
  };

  return {
    listBackdrops,
    listPosters,
    editMedia,
  };
};

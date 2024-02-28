import { useContext } from "react";
import { UtilityAreaContext } from "../contexts/utility-area";
import { ListImages } from "../pages/edit-media/images/list-images";
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
      []
    );
  };

  const listPosters = () => {
    push(
      <ListImages
        list_path={`/media/image/find/poster?mediaId=${media?.id}`}
        type_image="poster"
      />,
      `Posters ${media?.title}`,
      []
    );
  };

  const createBackdrop = () => {
    push(
      <CreateImage media={media} type="backdrop" />,
      `Create poster for ${media?.title}`,
      []
    );
  }

  const createPoster = () => {
    push(
      <CreateImage media={media} type="poster" />,
      `Create poster for ${media?.title}`,
      []
    );
  }

  const editMedia = () => {
    push(<Details mediaTitle={media?.title} />, `Edit ${media?.title}`, []);
  };

  return {
    listBackdrops,
    listPosters,
    editMedia,
    createPoster,
    createBackdrop,
  };
};

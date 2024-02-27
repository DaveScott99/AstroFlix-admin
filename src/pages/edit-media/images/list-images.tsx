import React, { useContext, useEffect } from "react";
import { UtilityAreaContext } from "../../../contexts/utility-area";
import { useApiGet } from "../../../hooks/useApiGet";
import { useApiMutate } from "../../../hooks/useApiMutate";
import { HeaderUtilityArea } from "../../../components/header-utility-area";
import { LoadingFull } from "../../../components/loading-full";
import { Toast } from "../../../components/toast/toast";
import { ArtDTO } from "../../../types/artDTO";
import * as ContextMenu from "@radix-ui/react-context-menu";
import { useQueryClient } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { Media } from "../../../types/media";
import { useFetchImagesByMedia } from "../../../queries/media";


interface ListImagesProps {
  list_path: string;
  type_image: string;
}

export function ListImages({
  list_path,
  type_image,
}: ListImagesProps) {
  const params = useParams();
  const currentMediaTitle = params["title"] as string;
  const [searchParams] = useSearchParams();
  const [currentSubmenu, setCurrentSubmenu] = React.useState<any>();

  console.log(searchParams.get('submenu'));


  const [ selectedImage, setSelectedImage ] = React.useState<number>();
  const queryClient = useQueryClient();
  const currentMedia = queryClient.getQueryData<Media>(['current-media', currentMediaTitle]);

  const {
    data: images,
    error,
    isError,
    isFetching,
  } = useFetchImagesByMedia(list_path, currentMediaTitle);

  const {
    mutate,
    error: errorSelectImage,
    isError: isErrorSelectImage,
    isPending,
    isSuccess: isSuccessSelectImage,
  } = useApiMutate(
    `/media/art/select/image?mediaId=${currentMedia?.id}&imageId=${selectedImage}&type=${type_image}`,
    "current-media"
  );

  const handleSelectImage = (idImage: number) => {
    setSelectedImage(idImage);
    mutate();
  }

  useEffect(() => {
    setCurrentSubmenu(searchParams.get('submenu'))
  }, [searchParams.get('submenu')])


  if (isFetching) {
    return <LoadingFull />;
  }

  return (
    <React.Fragment>
      <div className="w-full flex flex-col gap-8 justify-end items-center">
        <div className="grid grid-cols-2 gap-4">
          {images?.map((image: ArtDTO) => (
            <ContextMenu.Root key={image.id}>
              <ContextMenu.Trigger>
                <div className="rounded-md">
                  <img
                    src={image.filePath}
                    style={{ aspectRatio: image.aspectRatio }}
                  />
                </div>
              </ContextMenu.Trigger>

              <ContextMenu.Portal>
                <ContextMenu.Content className="bg-neutral-900 py-2 rounded-md w-56 flex flex-col gap-1">
                  <ContextMenu.Item
                    className=" cursor-pointer hover:bg-neutral-400/10 outline-none py-1 px-6 text-sm"
                    onClick={() => handleSelectImage(image.id)}
                  >
                    Change image
                  </ContextMenu.Item>
                </ContextMenu.Content>
              </ContextMenu.Portal>
            </ContextMenu.Root>
          ))}
        </div>
      </div>

      {isPending && <Toast status="loading" />}

      {isSuccessSelectImage && (
        <Toast
          title="Success!"
          description="Image selected!"
          status="success"
        />
      )}

      {isErrorSelectImage && (
        <div>
          <Toast
            title="Error!"
            description={errorSelectImage?.message}
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

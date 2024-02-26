import React, { useContext } from "react";
import { UtilityAreaContext } from "../../../contexts/utility-area";
import { useApiGet } from "../../../hooks/useApiGet";
import { useApiMutate } from "../../../hooks/useApiMutate";
import { HeaderUtilityArea } from "../../../components/header-utility-area";
import { LoadingFull } from "../../../components/loading-full";
import { Toast } from "../../../components/toast/toast";
import { ArtDTO } from "../../../types/artDTO";
import * as ContextMenu from "@radix-ui/react-context-menu";


interface ListImagesProps {
  list_path: string;
  type_image: string;
  media_id: number | undefined;
  title_header: string;
  action_header?: any;
}

export function ListImages({
  list_path,
  type_image,
  media_id,
  title_header,
  action_header,
}: ListImagesProps) {
  const { selectHeaderUtilityArea } = useContext(UtilityAreaContext);
  const [ selectedImage, setSelectedImage ] = React.useState<number>();

  const {
    data: images,
    error,
    isError,
    isFetching,
  } = useApiGet(list_path, "images-media");

  const {
    mutate,
    error: errorSelectImage,
    isError: isErrorSelectImage,
    isPending,
    isSuccess: isSuccessSelectImage,
  } = useApiMutate(
    `/media/art/select/image?mediaId=${media_id}&imageId=${selectedImage}&type=${type_image}`,
    "media"
  );

  const handleSelectImage = (idImage: number) => {
    setSelectedImage(idImage);
    mutate();
  }

  React.useEffect(() => {
    selectHeaderUtilityArea(
      <HeaderUtilityArea
        title={title_header}
        subtitle={`List of ${type_image}`}
        action={action_header}
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

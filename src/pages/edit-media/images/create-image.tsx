import React, { useContext } from "react";
import { HeaderUtilityArea } from "../../../components/header-utility-area";
import { LoadingClean } from "../../../components/loading-clean";
import { Modal } from "../../../components/modal";
import { Toast } from "../../../components/toast/toast";
import { UtilityAreaContext } from "../../../contexts/utility-area";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";
import { Image } from "../../../types/image";
import { Media } from "../../../types/media";
import { useMutateCreateImage } from "../../../queries/media";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

interface CreateImageProps {
  media: Media | undefined;
  type: string;
}

export function CreateImage({ media, type }: CreateImageProps) {
  const params = useParams();
  const queryClient = useQueryClient();
  const [selectedImage, setSelectedImage] = React.useState<string>();
  const { selectHeaderUtilityArea } = useContext(UtilityAreaContext);
  const currentMediaTitle = params["title"] as string;
  const currentMedia = queryClient.getQueryData<Media>([
    "current-media",
    currentMediaTitle,
  ]);

  const {
    data: images,
    isFetching,
    isError: isErrorListing,
    error: errorListing,
  } = useInfiniteScroll(
    `/tmdb-api/movie/images/${type}?idMovieTmdb=` + media?.idTMDB
  );

  const {
    mutate,
    error: errorCreate,
    isError: isErrorCreate,
    isPending,
    isSuccess: isSuccessCreate,
  } = useMutateCreateImage(currentMedia, selectedImage, type);

  const handleCreateImage = (file_path: string) => {
    setSelectedImage(file_path);
    mutate();
  };

  React.useEffect(() => {
    selectHeaderUtilityArea(
      <HeaderUtilityArea
        title={`List of ${type} available on TMDB for ${media?.title} `}
        subtitle={`Select a ${type} for add`}
      />
    );
  }, []);

  return (
    <React.Fragment>
      <div className=" flex justify-center">
        <div className="grid grid-cols-2 gap-4">
          {images?.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.map((poster: Image, i: number) => (
                <Modal
                  key={i}
                  trigger={
                    <div className="rounded-md  cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                      <img
                        className="rounded-md"
                        style={{ aspectRatio: poster.aspect_ratio }}
                        src={`https://image.tmdb.org/t/p/original/${poster.file_path}`}
                        alt="Poster media"
                      />
                    </div>
                  }
                  content={
                    <div className="rounded-md max-w-[450px] mb-5">
                      <img
                        className="rounded-md"
                        style={{ aspectRatio: poster?.aspect_ratio }}
                        src={`https://image.tmdb.org/t/p/original/${poster?.file_path}`}
                        alt="Poster media"
                      />
                    </div>
                  }
                  confirmBUtton={
                    <span
                      className="p-2 rounded-md bg-green-600 font-normal"
                      onClick={() => handleCreateImage(poster.file_path)}
                    >
                      Add
                    </span>
                  }
                  cancelButton={
                    <span className="border p-2 rounded-md font-normal">
                      Cancel
                    </span>
                  }
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-6">
        {isFetching && <LoadingClean />}
      </div>

      <div id="sentinel" className="h-[100px]  w-full" />

      {isPending && <Toast status="loading" />}

      {isSuccessCreate && (
        <Toast
          title="Success!"
          description={`${type} added`}
          status="success"
        />
      )}

      {isErrorListing && (
        <div>
          <Toast
            title="Error!"
            description={errorListing?.message}
            status="error"
          />
        </div>
      )}

      {isErrorCreate && (
        <div>
          <Toast
            title="Error!"
            description={errorCreate?.message}
            status="error"
          />
        </div>
      )}
    </React.Fragment>
  );
}

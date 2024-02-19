import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import { ASTROFLIX_API } from "../../../helper/axios-instance";
import { Genre } from "../../../types/genre";
import { Modal } from "../../modal";
import { Toast } from "../../toast/toast";

interface RemoveGenreProps {
  mediaId: number;
  genreToRemove: any;
}

export function RemoveGenre({ mediaId, genreToRemove }: RemoveGenreProps) {
  const queryClient = useQueryClient();

  const { mutate, isSuccess, isError, error } = useMutation({
    mutationFn: () =>
      ASTROFLIX_API.delete(`/media/movie/remove/genre?mediaId=${mediaId}`, {
        data: genreToRemove,
      }),
    onSuccess: () => {
      console.log("DELETED GENRE: " + genreToRemove.name);

      const previusGenres = queryClient.getQueryData<Genre[]>(["genres-media"]);

      if (previusGenres) {
        const nextGenres: any = [];

        previusGenres?.map((genre) => {
          if (genre.id !== genreToRemove.id) {
            nextGenres.push(genre);
          }
        });

        queryClient.setQueryData(["genres-media"], nextGenres);
      }
    },
  });

  return (
    <div>
      <Modal
        trigger={
          <div>
            <button className="p-2 rounded-md bg-red-600/60 hover:bg-red-600 transition-all">
              <Trash2 size={24} strokeWidth={1.75} />
            </button>
          </div>
        }
        content={
          <div className=" text-center p-8">
            <span className="font-semibold text-lg">
              Are you sure you want to delete this record?
            </span>
          </div>
        }
        confirmBUtton={
          <span
            className="px-2 py-1 rounded-md font-normal bg-green-600"
            onClick={() => mutate()}
          >
            Confirm
          </span>
        }
        cancelButton={
          <span className="px-2 py-1 border rounded-md font-normal">
            Cancel
          </span>
        }
      />

      {isSuccess && (
        <Toast title="Success!" description="Genre Removed" status="success" />
      )}

      {isError && (
        <div className="mt-10">
          <Toast title="Error!" description={error} status="error" />
        </div>
      )}
    </div>
  );
}

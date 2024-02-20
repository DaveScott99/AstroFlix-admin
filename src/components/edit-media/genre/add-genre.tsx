import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PlusCircle } from "lucide-react";
import React from "react";
import { ASTROFLIX_API } from "../../../helper/axios-instance";
import { Genre } from "../../../types/genre";
import { Modal } from "../../modal";
import { Toast } from "../../toast/toast";
import { SelectComponent } from "../../select";
import { useParams } from "react-router-dom";

export function AddGenre() {
  const params = useParams();
  const currentMediaId = params["id"] as string;
  const [selectedGenre, setSelectedGenre] = React.useState<Genre>();

  const queryClient = useQueryClient();

  const {
    mutate,
    isSuccess,
    isPending,
    error: errorAdd,
  } = useMutation({
    mutationFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      ASTROFLIX_API.post(`/media/movie/add/genre?mediaId=${currentMediaId}&genreId=${selectedGenre?.id}`);
    },
    onSuccess: () => {
      console.log("CREATED");

      const previusGenres = queryClient.getQueryData<Genre[]>(["genres-media"]);

      if (previusGenres) {
        const nextGenres = [...previusGenres, selectedGenre];
        queryClient.setQueryData(["genres-media"], nextGenres);
      }
      setSelectedGenre(undefined);
    },
    onError: () => {
      setSelectedGenre(undefined);
    },
  });

  const {
    data: genres,
    isFetching,
    error: errorGenre,
  } = useQuery<Genre[]>({
    queryKey: ["all-genres"],
    queryFn: async () => {
      const response = await ASTROFLIX_API.get("/media/genre");

      return response.data;
    },
    refetchOnWindowFocus: false,
    staleTime: 5000 * 60, // 5 minutes
  });

  const handleGenreChange = (selectedGenre: any) => {
    setSelectedGenre(selectedGenre);
  };

  return (
    <div>
      <Modal
        trigger={
          <button className="flex gap-2 items-center border p-2 rounded-md border-blue-700">
            <PlusCircle size={24} strokeWidth={1.75} />
            Add Genre
          </button>
        }
        content={
          <div className="flex flex-col gap-8 w-[400px] mb-8">
            <span className="text-lg font-semibold">Add Genre</span>

            <SelectComponent
              loading={isFetching}
              options={genres}
              value={selectedGenre}
              onChange={handleGenreChange}
            />
          </div>
        }
        confirmBUtton={
          <span
            className="p-2 rounded-md bg-green-600 font-normal"
            onClick={() => mutate()}
          >
            Update
          </span>
        }
        cancelButton={
          <span
            className="border p-2 rounded-md font-normal"
            onClick={() => setSelectedGenre(undefined)}
          >
            Cancel
          </span>
        }
      />

      {
        isPending && (
          <Toast status="loading" />
        )
      }

      {isSuccess && (
        <Toast title="Success!" description="Genre Added" status="success" />
      )}

      {errorGenre && (
        <div className="mt-10">
          <Toast
            title="Error!"
            description={errorGenre}
            status="error"
          />
        </div>
      )}

      {errorAdd && (
        <div className="mt-10">
          { /*@ts-ignore*/ }
          <Toast title="Error!" description={errorAdd.response.data.message} status="error" />
        </div>
      )}
    </div>
  );
}

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PlusCircle } from "lucide-react";
import React from "react";
import Select from "react-select";
import { ASTROFLIX_API } from "../../../helper/axios-instance";
import { Genre } from "../../../types/genre";
import { Modal } from "../../modal";
import { Toast } from "../../toast/toast";

export function AddGenre() {
  const [selectedGenre, setSelectedGenre] = React.useState<Genre>();

  const queryClient = useQueryClient();

  const { mutate, isSuccess, error: errorAdd } = useMutation({
    mutationFn: () =>
      ASTROFLIX_API.post(`/media/movie/add/genre?mediaId=${1}`, selectedGenre),
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
    }
  });

  const { data: genres, isFetching, error: errorGenre } = useQuery<Genre[]>({
    queryKey: ["all-genres"],
    queryFn: async () => {
      const response = await ASTROFLIX_API.get(
        "/media/genre"
      );

      return response.data;
    },
    refetchOnWindowFocus: false,
    staleTime: 5000 * 60 // 5 minutes
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
          <div className="p-4 flex flex-col gap-8 w-64">
            <span className="text-lg font-semibold">Add Genre</span>

            <Select
              isSearchable
              value={selectedGenre}
              onChange={handleGenreChange}
              options={genres}
              getOptionLabel={(genre: Genre) => genre.name}
              getOptionValue={(genre: Genre) => genre.id.toString()}
              isLoading={isFetching}
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  background: "#0f172a",
                  color: "#FFF",
                }),
                menu: (baseStyles) => ({
                  ...baseStyles,
                  background: "#1e293b",
                  color: "#FFF",
                }),
                option: (baseStyles) => {
                  return {
                    ...baseStyles,
                    backgroundColor: "transparent",
                    color: "#FFF",
                    cursor: "pointer",
                    transition: "all .1s",

                    ":active": {
                      ...baseStyles[":active"],
                      backgroundColor: "transparent",
                    },
                    ":hover": {
                      ...baseStyles[":hover"],
                      background: "#334155",
                    },
                  };
                },
                singleValue: (baseStyles) => {
                  return {
                    ...baseStyles,
                    color: "#FFF",
                  };
                },
              }}
            />
          </div>
        }
        confirmBUtton={
          <span
            className="px-2 py-1 rounded-md bg-green-600 font-normal"
            onClick={() => mutate()}
          >
            Update
          </span>
        }
        cancelButton={
          <span
            className="border px-2 py-1 rounded-md font-normal"
            onClick={() => setSelectedGenre(undefined)}
          >
            Cancel
          </span>
        }
      />

      {isSuccess && (
        <Toast title="Success!" description="Genre Added" status="success" />
      )}

      {errorGenre && (
        <div className="mt-10">
          <Toast title="Error!" description={errorGenre.message} status="error" />
        </div>
      )}

      {errorAdd && (
        <div className="mt-10">
          <Toast title="Error!" description={errorAdd.message} status="error" />
        </div>
      )}
    </div>
  );
}

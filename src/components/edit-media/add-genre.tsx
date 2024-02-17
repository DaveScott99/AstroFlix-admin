import { Modal } from "../modal";
import Select from "react-select";
import { PlusCircle } from "lucide-react";
import React from "react";
import { Genre } from "../../types/genre";
import { useApiAstroflix } from "../../hooks/useApiAstroflix";
import { Toast } from "../toast/toast";
import { useSearchAstroflix } from "../../hooks/useSearchAstroflix";

export function AddGenre() {
  const [selectedGenre, setSelectedGenre] = React.useState<Genre>();

  const { data: genres } = useSearchAstroflix<Genre[]>("/media/genre");

  const {
    methods: astroflixMethods,
    data: addResponse,
    error,
    isFetching,
  } = useApiAstroflix();

  const handleGenreChange = (selectedGenre: any) => {
    setSelectedGenre(selectedGenre);
  };

  return (
    <div className="w-full">
      {error?.message && (
        <div className="mt-10">
          <Toast title="Error!" description={error?.message} status="error" />
        </div>
      )}

      {
        addResponse?.status === 200 &&
          <Toast title="Success!" description="Genre Added" status="success" />
      }
      
      <div className="p-2 flex justify-between">
        <h2 className="font-semibold">Genres</h2>

        <Modal
          trigger={
            <button className="flex gap-2 items-center border p-2 rounded-md border-blue-700">
              <PlusCircle size={24} strokeWidth={1.75} />
              Add Genre
            </button>
          }
          content={
            <div className="p-4 flex flex-col gap-8">
              <span className="text-lg font-semibold">Add Genre</span>

              <Select
                isSearchable
                value={selectedGenre}
                onChange={handleGenreChange}
                options={genres}
                getOptionLabel={(genge: Genre) => genge.name}
                getOptionValue={(genge: Genre) => genge.id.toString()}
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    background: "#0f172a",
                    color: "#FFF"
                  }),
                  menu: (baseStyles) => ({
                    ...baseStyles,
                    background: "#1e293b",
                    color: "#FFF"
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
                      color: "#FFF"
                    }
                  }
                 
                }}
              />

              <div className="flex gap-2 justify-end">
                <button className="border px-4 py-2 rounded-md font-semibold">
                  Cancel
                </button>
                <button
                  className="px-4 py-2 rounded-md bg-green-600 font-semibold"
                  onClick={() => astroflixMethods.addGenre(1, selectedGenre)}
                >
                  Update
                </button>
              </div>
            </div>
          }
        />
      </div>

      <div>
        <table className="items-center w-full bg-transparent border-collapse relative">
          <thead>
            <tr>
              <th className="px-6 align-middle border border-t-0 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                #
              </th>
              <th className="px-6 align-middle border border-t-0 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                NAME
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border-t-0 px-6 align-middle font-semibold text-sm border-l-0 border-r-0 whitespace-nowrap p-4">
                1
              </td>
              <td className="border-t-0 px-6 align-middle font-semibold text-sm border-l-0 border-r-0 whitespace-nowrap p-4">
                Action
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

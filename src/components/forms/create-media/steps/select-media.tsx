import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Media } from "../../../../hooks/useFormCreateMedia";
import { Input } from "../../../input";

interface FormProps {
  medias: Media[] | null | undefined, 
  setValue: any,
  watch: any,
  handleSelectMedia: any, 
  isFetchingMedias: any
}

export function SelectMedia({ medias, setValue, watch, handleSelectMedia, isFetchingMedias }: FormProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      setValue("querySearch.title", searchQuery)
    }
  })

  return (
    <section>
      <h1 className="text-xl font-bold mb-6">Add a New Media</h1>

      <p className="mb-6">
        Adding a new media on ASTROFLIX is simple and easy you just need digit
        the title and select between results
      </p>

      <Input
        type="text"
        label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="flex justify-center mt-6">
        <button
          type="button"
          className="center mr-3 rounded-md bg-green-500 hover:bg-green-600 px-6 py-3 text-sm font-bold cursor-pointer"
          onClick={() => setValue("querySearch.title", searchQuery)}
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-8">
        {medias?.map((item) => (
          <div
            key={item.id}
            className={`relative rounded-xl cursor-pointer max-w-[300px] w-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105
                    ${
                      watch("media.idTmdb") === item.id &&
                      "transform -translate-y-1 scale-105 opacity-85"
                    }`}
            onClick={() => handleSelectMedia(item.id)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300` + item.poster_path}
              alt="Media poster"
              className="rounded-xl"
            />

            {watch("media.idTmdb") === item.id && (
              <CheckCircledIcon
                className="absolute left-0 right-0 bottom-1/4 top-1/4 mx-auto text-emerald-500"
                width="150"
                height="150"
              />
            )}
          </div>
        ))}
      </div>

      {isFetchingMedias && <p>Loading...</p>}
    </section>
  );
}

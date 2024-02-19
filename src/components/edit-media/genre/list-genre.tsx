import { useParams } from "react-router-dom";
import { ASTROFLIX_API } from "../../../helper/axios-instance";
import { Genre } from "../../../types/genre";
import { Loading } from "../../loading";
import { Toast } from "../../toast/toast";
import { RemoveGenre } from "./remove-genre";
import { useQuery } from "@tanstack/react-query";

export function ListGenre() {

  const params = useParams();
  const currentMedia = params['title'] as string;

  const { data: genres, isFetching, error } = useQuery<Genre[]>({
    queryKey: ["genres-media"],
    queryFn: async () => {
      const response = await ASTROFLIX_API.get(
        "/media/genre/find/media?title=" + currentMedia
      );

      return response.data;
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 // 1minute
  });

  return (
    <div>
      <table className="items-center w-full bg-transparent border-collapse relative">
        <thead>
          <tr>
            <th className="px-6 w-[30px] align-middle border border-t-0 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              #
            </th>
            <th className="px-6 align-middle border border-t-0 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              NAME
            </th>
            <th className="px-4 align-middle border border-t-0 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              ||
            </th>
          </tr>
        </thead>

        {isFetching ? (
          <tbody>
            <tr>
              <td></td>
              <td className="w-full p-10">
                <Loading />
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {genres?.map((genre: Genre) => (
              <tr key={genre.id}>
                <td className="border-t-0 px-6 align-middle font-semibold text-sm border-l-0 border-r-0 whitespace-nowrap p-4">
                  {genre.id}
                </td>
                <td className="border-t-0 px-6 align-middle font-semibold text-sm border-l-0 border-r-0 whitespace-nowrap p-4">
                  {genre.name}
                </td>
                <td>
                  <RemoveGenre mediaId={1} genreToRemove={genre} />
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>

      {error && (
        <div className="mt-10">
          <Toast title="Error!" description={error} status="error" />
        </div>
      )}
    </div>
  );
}

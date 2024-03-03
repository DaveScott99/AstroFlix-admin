import { GearIcon } from "@radix-ui/react-icons";
import { Loading } from "./loading";
import { Link } from "react-router-dom";
import { Media } from "../types/media";

interface ListMediasProps {
  listMedias: Media[] | undefined | null;
  isFetching: any;
}

export function Table({ listMedias, isFetching }: ListMediasProps) {
  return (
    <>
      <table className="items-center w-full bg-transparent border-collapse relative">
        <thead>
          <tr>
            <th className="px-6 align-middle border border-t-0 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Item
            </th>
            <th className="px-6 align-middle border border-t-0 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Year
            </th>
            <th className="px-6 align-middle border border-t-0 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Language
            </th>
            <th className="px-6 align-middle border border-t-0 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              Status
            </th>
            <th className="px-6 align-middle border border-t-0 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
              ||
            </th>
          </tr>
        </thead>

        {isFetching ? (
          <tbody className="absolute w-full flex items-center justify-center mt-10">
            <tr>
              <th>
                <Loading />
              </th>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {listMedias?.map((item) => (
              <tr key={item.id}>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img src={item.logo.filePath} className="h-12 w-28" alt="Item logo" />

                  <div>
                    <span className="ml-6 font-bold text-base">
                      {" "}
                      {item.title}{" "}
                    </span>
                    <div className="ml-6 flex items-center mt-1">
                      <span className="mr-2 text-xs font-medium border p-1 rounded-md">
                        PG-13 **
                      </span>
                      {item.genres.map((item) => (
                        <span
                          className="mr-2 text-xs font-medium"
                          key={item.id}
                        >
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </th>

                <td className="border-t-0 px-6 align-middle font-semibold text-sm border-l-0 border-r-0 whitespace-nowrap p-4">
                  {item.releaseYear}
                </td>

                <td className="border-t-0 px-6 align-middle font-semibold text-sm border-l-0 border-r-0 whitespace-nowrap p-4">
                  English **
                </td>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i
                    className={`w-2 h-2 outline ${
                      item.active === true ? "text-green-500" : "text-red-500"
                    }  mr-2`}
                  ></i>
                  <span className="font-semibold text-xs">
                    {item.active === true ? "Active" : "Disabled"}
                  </span>
                </td>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <Link to={`/media/` + item.title}>
                    <GearIcon
                      className="cursor-pointer border border-blue-500 p-1 rounded-md text-blue-500 hover:bg-blue-500 transition-all hover:text-white"
                      width="30"
                      height="30"
                    />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </>
  );
}

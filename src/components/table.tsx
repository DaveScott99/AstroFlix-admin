import { Media } from "../types/media";
import { GearIcon } from "@radix-ui/react-icons";

interface ListMediasProps {
  listMedias: Media[];
}

export function Table({ listMedias }: ListMediasProps) {
  return (
    <table className="items-center w-full bg-transparent border-collapse">
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
            Score
          </th>
          <th className="px-6 align-middle border border-t-0 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            ||
          </th>
        </tr>
      </thead>

      <tbody>
        {listMedias.map((item) => (
          <tr key={item.id}>
            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
              <img src={item.logo} className="h-12 w-28" alt="Item logo" />

              <div>
                <span className="ml-6 font-bold text-base"> {item.title} </span>
                <div className="ml-6 flex items-center mt-1">
                  <span className="mr-2 text-xs font-medium border p-1 rounded-md">
                    {item.parentalAdvisory}
                  </span>
                  {item.genre.map((item) => (
                    <span className="mr-2 text-xs font-medium" key={item.id}>
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </th>

            <td className="border-t-0 px-6 align-middle font-semibold text-sm border-l-0 border-r-0 whitespace-nowrap p-4">
              {item.year}
            </td>

            <td className="border-t-0 px-6 align-middle font-semibold text-sm border-l-0 border-r-0 whitespace-nowrap p-4">
              {item.language}
            </td>

            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i className="w-2 h-2 outline text-green-500 mr-2"></i>
              <span className="font-semibold text-slate-950 text-xs">
                {item.status}
              </span>
            </td>

            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div
                className="w-12 h-12 rounded-full flex justify-center items-center"
                style={{
                  background:
                    "radial-gradient(closest-side, #18181b 75%, transparent 80% 100%), conic-gradient(#0055ff 50%, #00000016 0)",
                }}
              >
                <span className="font-semibold">{item.score}%</span>
              </div>
            </td>

            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <GearIcon
                className="cursor-pointer border border-blue-500 p-1 rounded-md text-blue-500 hover:bg-blue-500 transition-all hover:text-white"
                width="30"
                height="30"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

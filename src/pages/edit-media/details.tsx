import { Input } from "../../components/input";

interface DetailsProps {
  mediaTitle: string | undefined;
}

export function Details({ mediaTitle }: DetailsProps) {
  return (
    <div className="w-full">
      <form>
        <Input type="text" label="Title" />

        <div className="flex flex-col mb-2">
          <Input type="number" min={0} label="Realease Year" />
        </div>

        <div className="flex flex-col mb-2">
          <Input type="number" min={0} label="Runtime" />
        </div>

        <div className="flex flex-col mb-2">
          <label className="font-semibold mb-2 text-sm">Adult</label>

          <select className="border p-2 rounded-md bg-transparent outline-blue-500 dark:focus:ring-blue-500 placeholder-transparent">
            <option className="bg-zinc-50 dark:bg-zinc-950" value="false">
              No
            </option>
            <option className="bg-zinc-50 dark:bg-zinc-950" value="true">
              Yes
            </option>
          </select>
        </div>

        <div className="flex flex-col mb-2">
          <Input type="text" label="Tagline" />
        </div>

        <div className="flex flex-col mb-2">
          <label className="font-semibold mb-2 text-sm">Overview</label>
          <textarea className="border p-2 rounded-md bg-transparent outline-blue-500 h-64" />
        </div>
      </form>

      <div className="flex gap-2 justify-end">
         <button className="px-2 py-1 border rounded-md text-sm ">
            Cancel
        </button>
        <button className="px-2 py-1 rounded-md text-sm bg-green-600/60 hover:bg-green-500/70">
            Update
        </button>
      </div>
    </div>
  );
}

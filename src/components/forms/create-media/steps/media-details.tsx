import { useTimeout } from "../../../../hooks/useTimeout";
import { Input } from "../../../input";
import { Loading } from "../../../loading";

interface FormProps {
  register: any;
  errors: any;
  previusFormStep: any;
  completeFormStep: any;
}

export function MediaDetails({
  register,
  errors,
  previusFormStep,
  completeFormStep,
}: FormProps) {
  const { isLoading } = useTimeout(300);

  return (
    <section>
      <h1 className="text-xl font-bold mb-6">Movie details</h1>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-col mb-2">
            <Input {...register("media.title")} type="text" label="Title" />
            {errors.media?.title?.message && (
              <p className="text-red-600 font-bold text-sm mt-1">
                {errors.media?.title?.message}
              </p>
            )}
          </div>

          <div className="flex flex-col mb-2">
            <label className="font-semibold mb-2 text-sm">Overview</label>
            <textarea
              className="border p-2 rounded-md bg-transparent outline-blue-500 h-64"
              {...register("media.overview")}
            />
            {errors.media?.overview?.message && (
              <p className="text-red-600 font-bold text-sm mt-1">
                {errors.media?.overview?.message}
              </p>
            )}
          </div>

          <div className="flex flex-col mb-2">
            <Input
              {...register("media.idTmdb")}
              type="text"
              label="TMDB ID"
              readOnly
            />
            {errors.media?.idTmdb?.message && (
              <p className="text-red-600 font-bold text-sm mt-1">
                {errors.media?.idTmdb?.message}
              </p>
            )}
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={previusFormStep}
              type="button"
              className="center mr-3 rounded-md bg-slate-700 hover:bg-slate-800 px-6 py-3 text-sm font-bold cursor-pointer"
            >
              Previus
            </button>
            <button
              onClick={completeFormStep}
              type="button"
              className="center rounded-md bg-green-500 hover:bg-green-600 px-6 py-3 text-sm font-bol cursor-pointer"
            >
              Next
            </button>
          </div>
        </>
      )}
    </section>
  );
}

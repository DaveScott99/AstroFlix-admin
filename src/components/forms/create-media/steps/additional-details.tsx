import { useTimeout } from "../../../../hooks/useTimeout";
import { Input } from "../../../input";
import { Loading } from "../../../loading";
import { Controller } from "react-hook-form";

interface FormProps {
  register: any;
  errors: any;
  previusFormStep: any;
  completeFormStep: any;
  control: any;
}

export function AdditionalDetails({
  register,
  errors,
  previusFormStep,
  completeFormStep,
  control,
}: FormProps) {
  const { isLoading } = useTimeout(300);

  return (
    <section>
      <h1 className="text-xl font-bold mb-6">Additional Details</h1>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-col mb-2">
            <label className="font-semibold mb-2 text-sm">Adult</label>

            <Controller
              name="media.isAdult"
              control={control}
              defaultValue='false'
              render={({ field }) => (
                <select
                  {...field}
                  className="border p-2 rounded-md bg-transparent outline-blue-500 dark:focus:ring-blue-500 placeholder-transparent"
                >
                  <option className="bg-zinc-50 dark:bg-zinc-950" value="false">
                    No
                  </option>
                  <option className="bg-zinc-50 dark:bg-zinc-950" value="true">
                    Yes
                  </option>
                </select>
              )}
            />
          </div>

          <div className="flex flex-col mb-2">
            <Input
              {...register("media.releaseYear")}
              type="number"
              min={0}
              label="Realease Year"
            />
            {errors.media?.runtime?.message && (
              <p className="text-red-600 font-bold text-sm mt-1">
                {errors.media?.runtime?.message}
              </p>
            )}
          </div>

          <div className="flex flex-col mb-2">
            <Input
              {...register("media.runtime")}
              type="number"
              min={0}
              label="Runtime"
            />
            {errors.media?.runtime?.message && (
              <p className="text-red-600 font-bold text-sm mt-1">
                {errors.media?.runtime?.message}
              </p>
            )}
          </div>

          <div className="flex flex-col mb-2">
            <Input {...register("media.tagline")} type="text" label="Tagline" />
            {errors.media?.tagline?.message && (
              <p className="text-red-600 font-bold text-sm mt-1">
                {errors.media?.tagline?.message}
              </p>
            )}
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={previusFormStep}
              type="button"
              className="center mr-3 rounded-md bg-slate-700 hover:bg-slate-800 px-6 py-3 text-sm font-bol cursor-pointer"
            >
              Previus
            </button>
            <button
              onClick={completeFormStep}
              type="button"
              className="center rounded-md bg-green-500 hover:bg-green-600 px-6 py-3 text-sm font-bold cursor-pointer"
            >
              Next
            </button>
          </div>
        </>
      )}
    </section>
  );
}

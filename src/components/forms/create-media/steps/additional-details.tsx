import { useTimeout } from "../../../../hooks/useTimeout";
import { Input } from "../../../input";
import { Loading } from "../../../loading";


interface FormProps {
  register: any;
  errors: any;
  previusFormStep: any;
  completeFormStep: any;
}

export function AdditionalDetails({
  register,
  errors,
  previusFormStep,
  completeFormStep,
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

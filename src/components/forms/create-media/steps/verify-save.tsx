interface FormProps {
  watch: any;
  errors: any;
}

export function VerifyAndSave({ watch, errors }: FormProps) {
  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-xl font-bold mb-6">Verify & Save</h1>

      <div className="flex">
        <h2 className="font-semibold text-base mr-2">Title: </h2>
        <p>{watch("media.title")}</p>
        {errors.media?.title?.message && (
          <p className="text-red-600 font-bold text-sm mt-1">
            {errors.media?.title?.message}
          </p>
        )}
      </div>

      <div className="flex">
        <h2 className="font-semibold text-base mr-2">Tagline: </h2>
        <p>{watch("media.tagline")}</p>
        {errors.media?.tagline?.message && (
          <p className="text-red-600 font-bold text-sm mt-1">
            {errors.media?.tagline?.message}
          </p>
        )}
      </div>

      <div className="flex">
        <h2 className="font-semibold text-base mr-2">Release Year: </h2>
        <p>{watch("media.releaseYear")}</p>
        {errors.media?.releaseYear?.message && (
          <p className="text-red-600 font-bold text-sm mt-1">
            {errors.media?.releaseYear?.message}
          </p>
        )}
      </div>

      <div className="flex">
        <h2 className="font-semibold text-base mr-2">Runtime: </h2>
        <p>{watch("media.runtime")}</p>
        {errors.media?.runtime?.message && (
          <p className="text-red-600 font-bold text-sm mt-1">
            {errors.media?.runtime?.message}
          </p>
        )}
      </div>

      <div className="flex">
        <h2 className="font-semibold text-base mr-2">TMDB ID: </h2>
        <p>{watch("media.idTMDB")}</p>
        {errors.media?.idTMDB?.message && (
          <p className="text-red-600 font-bold text-sm mt-1">
            {errors.media?.idTMDB?.message}
          </p>
        )}
      </div>

      <div className="flex">
        <h2 className="font-semibold text-base mr-2">Adult: </h2>
        <p>{watch("media.isAdult") === "true" ? "Yes" : "No"}</p>
      </div>

      <div className="flex">
        <h2 className="font-semibold text-base mr-2">Overview: </h2>
        <p>{watch("media.overview")}</p>
        {errors.media?.overview?.message && (
          <p className="text-red-600 font-bold text-sm mt-1">
            {errors.media?.overview?.message}
          </p>
        )}
      </div>
    </section>
  );
}

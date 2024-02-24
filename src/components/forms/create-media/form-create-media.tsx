import { useFormCreateMedia } from "../../../hooks/useFormCreateMedia";
import { useTimeout } from "../../../hooks/useTimeout";
import { AdditionalDetails } from "./steps/additional-details";
import { Steps } from "./steps/steps";
import { SelectMedia } from "./steps/select-media";
import { MediaDetails } from "./steps/media-details";
import { VerifyAndSave } from "./steps/verify-save";
import { Toast } from "../../toast/toast";
import React from "react";
import { LoadingFull } from "../../loading-full";
import { useMutation } from "@tanstack/react-query";
import { ASTROFLIX_API } from "../../../helper/axios-instance";

export function Form() {
  const {
    errors,
    handleSubmit,
    register,
    formStep,
    watch,
    selectFormStep,
    completeFormStep,
    previusFormStep,
    medias,
    isFetchingMedias,
    setValue,
    handleSelectMedia,
    control,
  } = useFormCreateMedia();

  const { mutate, isSuccess, isError, isPending } = useMutation({
    mutationFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await ASTROFLIX_API.post(`/media/movie`, watch("media"));
    },
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  });

  const { isLoading } = useTimeout(600);

  return (
    <React.Fragment>
      <div className="p-2 flex w-full h-[700px]  gap-4 rounded-md ">
        <Steps
          watch={watch}
          formStep={formStep}
          selectFormStep={selectFormStep}
        />

        <div className="flex-1 p-2 w-full">
          <form onSubmit={handleSubmit(() => mutate())}>
            {formStep === 0 && (
              <SelectMedia
                medias={medias}
                isFetchingMedias={isFetchingMedias}
                watch={watch}
                setValue={setValue}
                handleSelectMedia={handleSelectMedia}
              />
            )}

            {formStep === 1 && (
              <MediaDetails
                register={register}
                errors={errors}
                previusFormStep={previusFormStep}
                completeFormStep={completeFormStep}
              />
            )}

            {formStep === 2 && (
              <AdditionalDetails
                register={register}
                errors={errors}
                previusFormStep={previusFormStep}
                completeFormStep={completeFormStep}
                control={control}
              />
            )}

            {formStep === 3 && <VerifyAndSave watch={watch} errors={errors} />}

            <div className="mt-6 flex justify-end">
              {formStep === 3 && (
                <button
                  type="submit"
                  className="center rounded-md bg-green-500 hover:bg-green-600 px-6 py-3 text-sm font-bold cursor-pointer"
                >
                  Create Movie
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      {isLoading && <LoadingFull />}

      {isPending && <Toast status="loading" />}

      {isSuccess && (
        <Toast title="Success!" description="Movie Added" status="success" />
      )}

      {isError && (
        <Toast title="Error" description="Movie not added" status="error" />
      )}
    </React.Fragment>
  );
}

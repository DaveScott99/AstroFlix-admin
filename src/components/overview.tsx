import * as ContextMenu from "@radix-ui/react-context-menu";
import React from "react";
import { Controller } from "react-hook-form";
import { useUpdateOverview } from "../hooks/useUpdateOverview";
import { LoadingClean } from "./loading-clean";
import { Toast } from "./toast/toast";

export function Overview() {
  const {
    currentMedia,
    editable,
    control,
    errorUpdate,
    errors,
    handleSubmit,
    isErrorUpdate,
    isSuccessUpdate,
    isPendingUpdate,
    mutateUpdate,
    setEditable,
  } = useUpdateOverview();

  if (!currentMedia) {
    return <LoadingClean />;
  }

  return (
    <React.Fragment>
      <div className="max-w-2xl h-32">

        {!editable && (
          <ContextMenu.Root>
            <ContextMenu.Trigger>
              <div className="rounded h-20 py-1 border-dashed border-2 border-transparent hover:border-zinc-50/40 transition-all">
                <p className="text-sm">{currentMedia.overview}</p>
              </div>
            </ContextMenu.Trigger>

            <ContextMenu.Portal>
              <ContextMenu.Content className="bg-neutral-900 py-2 rounded-md w-56 flex flex-col gap-1">
                <ContextMenu.Item
                  className=" cursor-pointer hover:bg-neutral-400/10 outline-none py-1 px-6 text-sm"
                  onClick={() => setEditable(!editable)}
                >
                  Edit overview
                </ContextMenu.Item>
              </ContextMenu.Content>
            </ContextMenu.Portal>
          </ContextMenu.Root>
        )}

        {editable && (
          <form onSubmit={handleSubmit(() => mutateUpdate())}>
            <div className="flex flex-col mb-2">
              <Controller
                name="overview"
                control={control}
                defaultValue={currentMedia.overview}
                render={({ field }) => (
                  <textarea
                    {...field}
                    className="border border-zinc-50/50 rounded  py-1 resize-none h-20 text-sm bg-zinc-950/60"
                  />
                )}
              />
              {errors.overview?.message && (
                <p className="text-red-600 font-bold text-sm mt-1">
                  {errors?.overview?.message}
                </p>
              )}
            </div>

            <div className="flex gap-2 justify-end">
              <button
                className="border px-2 py-1 text-sm rounded"
                onClick={() => setEditable(!editable)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="border px-2 py-1 text-sm rounded bg-green-600/70 hover:bg-green-600/90"
              >
                Update
              </button>
            </div>
          </form>
        )}
      </div>

      {isSuccessUpdate && (
        <Toast
          title="Success!"
          description={`Overview updated`}
          status="success"
        />
      )}

      {isPendingUpdate && <Toast status="loading" />}

      {isErrorUpdate && (
        <Toast
          title="Error"
          description={errorUpdate?.message}
          status="error"
        />
      )}
    </React.Fragment>
  );
}

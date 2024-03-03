import React from "react";
import * as ContextMenu from "@radix-ui/react-context-menu";
import { useUpdateTagline } from "../hooks/useUpdateTagline";
import { LoadingClean } from "./loading-clean";
import { Controller } from "react-hook-form";
import { Toast } from "./toast/toast";

interface TaglineProps {
  text: string | undefined;
}

export function Tagline({ text }: TaglineProps) {

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
  } = useUpdateTagline();

  if (!currentMedia) {
    return <LoadingClean />;
  }

  return (
    <React.Fragment>
    <div className="max-w-2xl">
      {!editable && (
        <ContextMenu.Root>
          <ContextMenu.Trigger>
            <div className="rounded border-dashed py-1 border-2 border-transparent hover:border-zinc-50/40 transition-all">
              <p className="text-sm">{currentMedia.tagline}</p>
            </div>
          </ContextMenu.Trigger>

          <ContextMenu.Portal>
            <ContextMenu.Content className="bg-neutral-900 py-2 rounded-md w-56 flex flex-col gap-1">
              <ContextMenu.Item
                className=" cursor-pointer hover:bg-neutral-400/10 outline-none py-1 px-6 text-sm"
                onClick={() => setEditable(!editable)}
              >
                Edit tagline
              </ContextMenu.Item>
            </ContextMenu.Content>
          </ContextMenu.Portal>
        </ContextMenu.Root>
      )}

      {editable && (
        <form onSubmit={handleSubmit(() => mutateUpdate())} className="flex gap-2 w-full items-center py-1">
          <div className="flex flex-col w-full">
            <Controller
              name="tagline"
              control={control}
              defaultValue={currentMedia.tagline}
              render={({ field }) => (
                <input
                  {...field}
                  className="border border-zinc-50/50 rounded px-1 py-1 resize-none text-sm bg-zinc-950/60"
                />
              )}
            />
            {errors.tagline?.message && (
              <p className="text-red-600 font-bold text-sm mt-1">
                {errors?.tagline?.message}
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
        description={`Tagline updated`}
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

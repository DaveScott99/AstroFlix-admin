import * as Dialog from "@radix-ui/react-dialog";
import React from "react";

interface ModalProps {
  trigger: any;
  content: any;
  cancelButton: any;
  confirmBUtton: any;
}

export function Modal({
  trigger,
  content,
  confirmBUtton,
  cancelButton,
}: ModalProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 bg-black/50 fixed" />

        <Dialog.Content className={`z-10 p-8 dark:bg-slate-950 rounded-md fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border`}>
          {content}

          <div className="flex gap-2 justify-end">
            <Dialog.Close>{cancelButton}</Dialog.Close>
            <Dialog.Close><div>{confirmBUtton}</div></Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

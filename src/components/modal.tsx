import * as Dialog from '@radix-ui/react-dialog';

interface ModalProps {
    trigger: any;
    content: any;
}

export function Modal({ trigger, content }: ModalProps) {
    return (

        <Dialog.Root>
            <Dialog.Trigger asChild>
                {trigger}
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='inset-0 bg-black/50 fixed' />

                <Dialog.Content className='z-10 bg-slate-900 rounded-md fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full'>
                    {content}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>

    )
}
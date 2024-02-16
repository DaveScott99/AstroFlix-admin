import * as DropdownMenuUI from '@radix-ui/react-dropdown-menu'
import { PlusIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

export function DropdownMenu() {

    return (

        <DropdownMenuUI.Root>

            <DropdownMenuUI.Trigger asChild  >
                <button className='outline-none'>
                    <PlusIcon width='30px' height='30px' />
                </button>
            </DropdownMenuUI.Trigger>

            <DropdownMenuUI.Portal >
                <DropdownMenuUI.Content className='border flex flex-col p-2 gap-2 mt-4 rounded-lg'  sideOffset={10} alignOffset={10} sticky='partial' >
                    <Link to="/create/movie">
                        <DropdownMenuUI.Item className='cursor-pointer py-2 px-4 hover:bg-zinc-700 rounded-lg outline-none transition duration-100 ease-in-out '>
                            Add New movie
                        </DropdownMenuUI.Item>
                    </Link>
                    <DropdownMenuUI.Item className='cursor-pointer py-2 px-4 hover:bg-zinc-700 rounded-lg outline-none transition duration-100 ease-in-out'>
                        Add New tv show
                    </DropdownMenuUI.Item>
                </DropdownMenuUI.Content>
            </DropdownMenuUI.Portal>

        </DropdownMenuUI.Root>

    );

}
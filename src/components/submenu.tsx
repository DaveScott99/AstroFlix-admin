import { useSearchParams } from "react-router-dom";
import * as Tabs from '@radix-ui/react-tabs';

export function Submenu() {

    const [searchParams] = useSearchParams();

    const tab = searchParams.get('tab')

    return (
        <>
            {
                tab === "create" && (
                    <Tabs.List className="flex flex-col gap-2 w-full">
                        <Tabs.Trigger value="tab1" className="border p-2">
                            Create movie
                        </Tabs.Trigger>
                        <Tabs.Trigger value="tab2" className="border p-2">
                            Create Tv Show
                        </Tabs.Trigger>
                    </Tabs.List>
                )
            }

            {
                tab === "dashboard-movie" && (
                    <Tabs.List className="flex flex-col gap-2 w-full">
                        <Tabs.Trigger value="tab1" className="border p-2">
                            List
                        </Tabs.Trigger>
                        
                    </Tabs.List>
                )
            }
        </>


       

    )
}
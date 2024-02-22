import * as Tabs from '@radix-ui/react-tabs';
import { CreateMovie } from '../pages/create-movie';
import { useSearchParams } from 'react-router-dom';


export function Content() {

    const [searchParams] = useSearchParams();

    const tab = searchParams.get('tab')


    return (
       <main>

            {
                tab === 'create' && (
                    <div>
                        <Tabs.Content value="tab1" className="w-full">
                            <CreateMovie />
                        </Tabs.Content>
    
                        <Tabs.Content value="tab2" className="w-full">
                            <p>CREATE TV SHOW</p>
                        </Tabs.Content>
                        
                    </div>
                   
                )
            }

            {
                tab === 'dashboard-movie' && (
                    <div>
                        <Tabs.Content value="tab1" className="w-full">
                            List movies
                        </Tabs.Content>
                        
                    </div>
                   
                )
            }

       </main>
    )
}
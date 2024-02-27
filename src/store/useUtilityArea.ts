import { create } from 'zustand';

type Component = {
    id: number;
    header: React.ReactNode;
    content: React.ReactNode;
}

type UtilityAreaStore = {
    components: Component[] | [];
    push: (component: Component) => void;
    previus: () => void;
}

const useUtilityAreaStore = create<UtilityAreaStore>(
    (set) => ({
        components: [],
        push: (component: Component) => {
            set((state) => ({
                components: [component, ...state.components]
            }));
        },
        previus: () => {
            set((state) => ({
                components: state.components.slice(1),
            }));
        }
    })
)

export default useUtilityAreaStore;
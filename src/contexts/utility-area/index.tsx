import React from "react";

type UtilityAreaContextProps = {
    component: React.ReactNode | null;
    selectComponent: (component: React.ReactNode) => void;
}

const UtilityAreaContext = React.createContext<UtilityAreaContextProps>({} as UtilityAreaContextProps);

const UtilityAreaProvider = ({children} : {children: React.ReactNode}) => {

    const [component, setComponent] = React.useState<React.ReactNode | null>(null);

    const selectComponent = (component: React.ReactNode) => {
        setComponent(component);
    }

    return (
        <UtilityAreaContext.Provider value={{component, selectComponent}}>
            <>{children}</>
        </UtilityAreaContext.Provider>
    )
}

export { UtilityAreaProvider, UtilityAreaContext };
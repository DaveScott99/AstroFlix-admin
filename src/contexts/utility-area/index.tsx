import React from "react";

type UtilityAreaContextProps = {
    headerUtilityArea: React.ReactNode | null;
    component: React.ReactNode | null;
    selectComponent: (component: React.ReactNode) => void;
    selectHeaderUtilityArea: (headerUtilityArea: React.ReactNode) => void;
}

const UtilityAreaContext = React.createContext<UtilityAreaContextProps>({} as UtilityAreaContextProps);

const UtilityAreaProvider = ({children} : {children: React.ReactNode}) => {

    const [headerUtilityArea, setHeaderUtility] = React.useState<React.ReactNode | null>(null);
    const [component, setComponent] = React.useState<React.ReactNode | null>(null);

    const selectComponent = (component: React.ReactNode) => {
        setComponent(component);
    }

    const selectHeaderUtilityArea = (headerUtilityArea: React.ReactNode) => {
        setHeaderUtility(headerUtilityArea);
    }

    return (
        <UtilityAreaContext.Provider value={{component, headerUtilityArea, selectComponent, selectHeaderUtilityArea}}>
            <>{children}</>
        </UtilityAreaContext.Provider>
    )
}

export { UtilityAreaProvider, UtilityAreaContext };
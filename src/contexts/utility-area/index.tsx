import React from "react";

type UtilityAreaContextProps = {
  components: React.ReactNode[] | [];
  headerUtilityArea: React.ReactNode | null;
  push: (component: React.ReactNode) => void;
  previus: () => void;
  selectHeaderUtilityArea: (headerUtilityArea: React.ReactNode) => void;
};

const UtilityAreaContext = React.createContext<UtilityAreaContextProps>(
  {} as UtilityAreaContextProps
);

const UtilityAreaProvider = ({ children }: { children: React.ReactNode }) => {
  const [headerUtilityArea, setHeaderUtility] = React.useState<React.ReactNode | null>(null);
  const [components, setComponents] = React.useState<React.ReactNode[]>([]);

  const push = (newComponent: React.ReactNode) => {
   // Verifica se o componente já está na pilha
   if (!components.includes(newComponent)) {
        setComponents([...components, newComponent]);
    }
    else {
        console.log("EXISTS")
    }
  };

  const previus = () => {
    setComponents((prevComponents) => {
      if (prevComponents.length > 1) {
        return prevComponents.slice(0, -1);
      } else {
        return [];
      }
    });
  };

  const selectHeaderUtilityArea = (headerUtilityArea: React.ReactNode) => {
    setHeaderUtility(headerUtilityArea);
  };

  return (
    <UtilityAreaContext.Provider
      value={{
        components,
        headerUtilityArea,
        push,
        previus,
        selectHeaderUtilityArea,
      }}
    >
      <>{children}</>
    </UtilityAreaContext.Provider>
  );
};

export { UtilityAreaProvider, UtilityAreaContext };

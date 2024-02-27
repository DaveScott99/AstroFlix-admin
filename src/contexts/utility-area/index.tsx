import React from "react";

class ComponentEntity {
  constructor(
    public name: string,
    public content: React.ReactNode,
    public actions: React.ReactNode[]
  ) {}
}

type UtilityAreaContextProps = {
  components: ComponentEntity[] | [];
  headerUtilityArea: React.ReactNode | null;
  push: (
    component: React.ReactNode,
    componentName: string,
    componentActions: React.ReactNode[]
  ) => void;
  previus: () => void;
  clear: () => void;
  selectHeaderUtilityArea: (headerUtilityArea: React.ReactNode) => void;
};

const UtilityAreaContext = React.createContext<UtilityAreaContextProps>(
  {} as UtilityAreaContextProps
);

const UtilityAreaProvider = ({ children }: { children: React.ReactNode }) => {
  const [headerUtilityArea, setHeaderUtility] =
    React.useState<React.ReactNode | null>(null);
  const [components, setComponents] = React.useState<ComponentEntity[]>([]);
  const [componentKeys] = React.useState<Set<string>>(new Set());

  const push = (
    component: React.ReactNode,
    componentName: string,
    componentActions: React.ReactNode[]
  ) => {
    const newComponent = new ComponentEntity(
      componentName,
      component,
      componentActions
    );
    const componentKey = `${newComponent.name}`;

    if (!componentKeys.has(componentKey)) {
      setComponents((prevComponents) => {
        componentKeys.add(componentKey);
        return [...prevComponents, newComponent];
      });
    }
  };

  const previus = () => {
    setComponents((prevComponents) => {
      componentKeys.delete(components[components.length - 1].name);
      if (prevComponents.length > 1) {
        return prevComponents.slice(0, -1);
      } else {
        return [];
      }
    });
  };

  const clear = () => {
    setComponents([]);
    componentKeys.clear();
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
        clear,
        previus,
        selectHeaderUtilityArea,
      }}
    >
      <>{children}</>
    </UtilityAreaContext.Provider>
  );
};

export { UtilityAreaProvider, UtilityAreaContext };

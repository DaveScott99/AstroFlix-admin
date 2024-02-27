import React from "react";

class ComponentEntity {
  // Adicione quaisquer atributos únicos que você deseja comparar
  constructor(public id: number, public name: string, public content: React.ReactNode, public actions: React.ReactNode[]) {}
}

type UtilityAreaContextProps = {
  components: ComponentEntity[] | [];
  headerUtilityArea: React.ReactNode | null;
  push: (component: React.ReactNode, componentName: string, componentActions: React.ReactNode[]) => void;
  previus: () => void;
  selectHeaderUtilityArea: (headerUtilityArea: React.ReactNode) => void;
};

const UtilityAreaContext = React.createContext<UtilityAreaContextProps>(
  {} as UtilityAreaContextProps
);

const UtilityAreaProvider = ({ children }: { children: React.ReactNode }) => {
  const [headerUtilityArea, setHeaderUtility] = React.useState<React.ReactNode | null>(null);
  const [components, setComponents] = React.useState<ComponentEntity[]>([]);

  const push = (newComponent: React.ReactNode, componentName: string, componentActions: React.ReactNode[]) => {

    const newEntity = new ComponentEntity(components.length + 1, componentName, newComponent, componentActions);

    setComponents([...components, newEntity]);


    // Verifica se a entidade já está na pilha
    /*
    if (!components.some((entity) => entity.name !== newEntity.name && entity.id !== newEntity.id)) {
      setComponents([...components, newEntity]);
    }*/
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

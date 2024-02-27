import { useContext } from "react";
import { UtilityAreaContext } from "../../contexts/utility-area";

export function UtilityAreaTests() {
  const { push } = useContext(UtilityAreaContext);
  return (
    <div className="flex gap-2">
      <button
        onClick={() =>
            {
                push(
                    <div>
                      Primary component
                    </div>,
                    "primary",
                    [
                        <div
                        className="border"
                        onClick={() =>
                            {
                                push(<div>Primary Secondary Component</div>, "primary-secondary", [])
                                console.log("PUSH 2")
                            }
                        }
                      >
                        Primary Secondary component
                      </div>
                    ]
                  )

                  console.log("PUSH 1")
            }
         
        }
        className="border"
      >
        Primary
      </button>

      <button
        className="border"
        onClick={() => push(<div>Secondary Component</div>, "secondary", [])}
      >
        Secondary
      </button>
    </div>
  );
}

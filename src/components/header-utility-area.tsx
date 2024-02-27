import { ArrowLeft } from "lucide-react";
import { useContext } from "react";
import { UtilityAreaContext } from "../contexts/utility-area";

interface HeaderUtilityAreaProps {
  title: string;
  subtitle: string;
  action?: any;
}

export function HeaderUtilityArea({
  title,
  subtitle,
  action,
}: HeaderUtilityAreaProps) {

  const { previus } = useContext(UtilityAreaContext);

  return (
    <div className="w-full grid grid-cols-3 px-3 py-2">
      <div className="flex items-center">
        <ArrowLeft size={24} strokeWidth={1.75} absoluteStrokeWidth className="cursor-pointer"  onClick={() => previus()}/>
      </div>

      <div className="text-center">
        <h2 className="text-base">{title}</h2>
        <span className="text-sm text-neutral-500">{subtitle}</span>
      </div>

      <div className="flex items-center justify-end">
        {action.map((action: React.ReactNode, i:number) => (
          <div key={i}>
            {action}
          </div>
        ))}
      </div>
    </div>
  );
}

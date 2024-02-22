interface OverviewProps {
  text: string;
}

export function Overview({ text }: OverviewProps) {
  return (
    <div className="p-1 max-w-2xl">
      <h3 className="font-semibold text-base mb-1">Overview</h3>
      <div className="rounded-lg p-1">
        <span className="text-sm">{text}</span>
      </div>
    </div>
  );
}

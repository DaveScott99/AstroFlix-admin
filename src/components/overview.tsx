interface OverviewProps {
  text: string | undefined;
}

export function Overview({ text }: OverviewProps) {
  return (
    <div className="max-w-2xl ">
      <h3 className="font-semibold text-base mb-1">Overview</h3>
      <div className="rounded-lg">
        <span className="text-sm">{text}</span>
      </div>
    </div>
  );
}

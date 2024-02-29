import React from "react";

interface OverviewProps {
  text: string | undefined;
}

export function Overview(text: OverviewProps) {

  const [overview, setOverview] = React.useState<string>(text.text);
  const [editable, setEditable] = React.useState<boolean>(false);

  return (
    <div className="max-w-2xl">

      <form>
        <textarea 
          value={overview}
          className="bg-transparent outline-none text-sm border border-zinc-50/50 rounded w-96 h-full"/>
      </form>

      <h3 className="font-semibold text-base mb-1">Overview</h3>
      <div className="rounded-lg">
        <span className="text-sm">{text.text}</span>
      </div>
    </div>
  );
}

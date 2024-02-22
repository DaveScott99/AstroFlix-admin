interface TaglineProps {
  text: string;
}

export function Tagline({ text }: TaglineProps) {
  return (
    <div className="opacity-95 rounded-lg p-1 text-sm max-w-2xl">
      <em>{text}</em>
    </div>
  );
}

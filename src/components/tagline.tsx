interface TaglineProps {
  text: string | undefined;
}

export function Tagline({ text }: TaglineProps) {
  return (
    <div className="opacity-95 rounded-lg text-sm max-w-2xl">
      <em>{text}</em>
    </div>
  );
}

interface ReleaseYearProps {
  year: number | undefined;
}

export function ReleaseYear({ year }: ReleaseYearProps) {
  return (
    <div className="opacity-90 text-sm">
      <em>{year}</em>
    </div>
  );
}

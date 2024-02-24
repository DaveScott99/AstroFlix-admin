
interface PosterProps {
  url: string | undefined;
}

export function Poster({ url }: PosterProps) {
  return (
    <div className="max-w-[300px] w-full  p-1 rounded-lg">
      <img
        src={`https://image.tmdb.org/t/p/original/`+url}
        alt="Media poster"
        className="aspect-2/3 h-auto max-w-full bg-cover rounded-lg"
      />
    </div>
  );
}


interface PosterProps {
  url: string | undefined;
}

export function Poster({ url }: PosterProps) {
  return (
    <div className="md:max-w-[250px] max-w-[300px] w-full shadow-2xl p-1 rounded-lg">
      <img
        src={url}
        alt="Media poster"
        className="aspect-2/3 h-auto max-w-full bg-cover rounded-lg"
      />
    </div>
  );
}

import React from "react";

interface PosterProps {
  url: string | undefined;
  aspect_ratio: number | undefined;
}

export function Poster({ url, aspect_ratio }: PosterProps) {
  return (
    <React.Fragment>
      <img
        src={url}
        alt="Media poster"
        style={{ aspectRatio: aspect_ratio }}
        className="h-auto max-w-full bg-cover rounded-lg"
      />
    </React.Fragment>
  );
}

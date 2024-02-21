import * as AspectRatio from "@radix-ui/react-aspect-ratio";

interface PosterProps {
    url: string;
}

export function Poster({url}: PosterProps) {
    return (

        <div className="max-w-[250px] w-full shadow-2xl border-dashed border-2 p-1 rounded-lg">
            <AspectRatio.Root ratio={2/3}>
                <img
                src={url}
                alt="Media poster"
                className="h-auto max-w-full bg-cover rounded-lg"
                />
            </AspectRatio.Root>
        </div>

    )
}
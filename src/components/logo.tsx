import * as AspectRatio from "@radix-ui/react-aspect-ratio";

export function Logo() {
    return (

        <div className="max-w-[250px] w-full shadow-2xl border-dashed border-2 p-1 rounded-lg">
            <AspectRatio.Root ratio={2/3}>
                <img
                src="https://image.tmdb.org/t/p/original/4MdzluUXHjgVRwRRNh5vSPq0TB5.png"
                alt="Media Logo"
                className="h-auto max-w-full bg-cover rounded-lg"
                />
            </AspectRatio.Root>
        </div>

    )
}
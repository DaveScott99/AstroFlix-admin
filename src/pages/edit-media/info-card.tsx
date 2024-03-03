import { useParams } from "react-router-dom";
import { HomepageStatus } from "./homepage-status";
import { Status } from "./status";
import { useQueryClient } from "@tanstack/react-query";
import { Media } from "../../types/media";
import { Genre } from "../../types/genre";

export function InfoCard() {
    const params = useParams();
    const currentMediaTitle = params["title"] as string;
    const queryClient = useQueryClient();
    const currentMedia = queryClient.getQueryData<Media>([
      "current-media",
      currentMediaTitle,
    ]);

    return (

        <div className="border border-zinc-50/50 rounded-lg max-w-80 max-h-96 h-full w-full p-2 flex flex-col gap-4">
                  
        <div className="flex justify-center gap-4 items-center">
          <Status />
          <HomepageStatus />
        </div>

        <div>
          <span>Content Advisory</span>
        </div>

        <div className="flex flex-col">
          <span className="text-base font-semibold">Runtime</span>
          <span className="text-sm">{currentMedia?.runtime} minutes</span>
        </div>

        <div>
          <span className="text-base font-semibold">Budget</span>
        </div>

        <div>
          <span className="text-base font-semibold">
            Original Language
          </span>
        </div>

        <div>
          <span className="text-base font-semibold">Genres</span>
          <div>
            {currentMedia?.genres.map((genre: Genre) => (
              <span className="text-sm" key={genre.id}>
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    )
}
import { Backdrop } from "../../components/backdrop";
import { Overview } from "../../components/overview";
import { Poster } from "../../components/poster";
import { ReleaseYear } from "../../components/realease-year";
import { Tagline } from "../../components/tagline";
import { Title } from "../../components/title";

export function EditMedia() {
  return (
    <div>
      <Backdrop url="https://image.tmdb.org/t/p/original/yyFc8Iclt2jxPmLztbP617xXllT.jpg">
        <div className="mx-auto w-full md:flex-row flex flex-col items-center justify-center lg:items-center gap-4 p-4 pt-16 
          bg-gradient-to-t from-zinc-50 to-transparent text-white dark:bg-gradient-to-t dark:from-slate-950 dark:to-transparent">
          <Poster url="https://image.tmdb.org/t/p/original/qhb1qOilapbapxWQn9jtRCMwXJF.jpg" />
          <div className=" flex flex-col gap-2">
            <div className="md:justify-start flex items-center justify-center gap-1">
              <Title text="Wonka" />
              <ReleaseYear year="2023" />
            </div>
            <Tagline text="Every good thing in this world started with a dream." />
            <Overview
              text="
                    Willy Wonka – chock-full of ideas and determined to change
                    the world one delectable bite at a time – is proof that the
                    best things in life begin with a dream, and if you’re lucky
                    enough to meet Willy Wonka, anything is possible.
                    "
            />
          </div>
        </div>
      </Backdrop>

      <section>
        


      </section>
    </div>
  );
}

import { Backdrop } from "../../components/backdrop";
import { Overview } from "../../components/overview";
import { Poster } from "../../components/poster";
import { Tagline } from "../../components/tagline";
import { Title } from "../../components/title";

export function EditMedia() {
    return (
        <div>

            <Backdrop url="https://image.tmdb.org/t/p/original/yyFc8Iclt2jxPmLztbP617xXllT.jpg">
                <div className="mx-auto min-w-28 max-w-4xl flex items-center gap-6 py-8">
                <Poster url="https://image.tmdb.org/t/p/original/qhb1qOilapbapxWQn9jtRCMwXJF.jpg" />
                <div className="flex flex-col gap-0.5"> 
                    <Title title="Wonka" />
                    <Tagline text="Every good thing in this world started with a dream." />
                    <Overview text="
                    Willy Wonka – chock-full of ideas and determined to change
                    the world one delectable bite at a time – is proof that the
                    best things in life begin with a dream, and if you’re lucky
                    enough to meet Willy Wonka, anything is possible.
                    " />
                </div>
                </div>
            </Backdrop>

            <section>


            </section>
        
        </div>
    )

}
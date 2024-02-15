import { Header } from "./header";

export function Layout({ children, center }:any ) {
    return (
        <div className="mx-auto max-full">
            <Header />

            <div className={`${center && "mx-auto max-w-7xl"}`}>
                { children }
            </div>

        </div>
    );
}
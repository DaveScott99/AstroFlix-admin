import { Header } from "./header";

export function Layout({ children }:any ) {
    return (
        <div className="mx-auto max-full">
            <Header />

            <div className="mx-auto max-w-7xl">
                { children }
            </div>

        </div>
    );
}
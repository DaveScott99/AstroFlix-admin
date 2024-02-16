import { Header } from "./header";
import { Sidebar } from "./sidebar";

export function Layout({ children, center }:any ) {
    return (
        <div className="mx-auto max-full">
            <Header />

            <Sidebar />

            <div className={`${center && "mx-auto max-w-7xl"}`}>
                { children }
            </div>

        </div>
    );
}
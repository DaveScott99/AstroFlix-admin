import { Header } from "./header";
import { Sidebar } from "./sidebar";

export function Layout({ children, center, colision_header }:any ) {
    return (
        <main className="mx-auto max-full">
            <Header />

            <Sidebar />

            <div className={`${center && "mx-auto max-w-7xl"} ${colision_header && "pt-24" }`}>
                { children }
            </div>

        </main>
    );
}
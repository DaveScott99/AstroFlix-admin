import { Link } from "react-router-dom";

export function NotFoundPage() {
    return (
        <div className="mx-auto max-w-7xl my-12">
            <h1 className="font-bold text-4xl my-10">404 Not Found</h1>
            <Link to="/">Return to home</Link>
        </div>
    )
}
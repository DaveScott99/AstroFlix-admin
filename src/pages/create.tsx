import { Link } from "react-router-dom";

export function Create() {
    return (
        <div>
            
            <Link to="/create/movie">
                <button className="border p-2">Movie</button>
            </Link>

        </div>
    )
}
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <ul className="flex">
        <li className="flex-1 mr-6">
          <Link
            className="text-center block rounded py-2 px-12 hover:bg-blue-500 font-semibold transition-all"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="flex-1 mr-6">
          <Link
            className="text-center block rounded py-2 px-12 font-semibold hover:bg-blue-500 transition-all"
            to="/movie"
          >
            Movie
          </Link>
        </li>
        <li className="flex-1 mr-6">
          <Link
            className="text-center block rounded text-whit py-2 px-12 font-semibold hover:bg-blue-500 transition-all"
            to="#"
          >
            TvShow
          </Link>
        </li>
      </ul>
    </nav>
  );
}

import { Link, useParams } from "react-router-dom";

export function ConfigMedia({ children }: any) {
  const params = useParams();
  const currentMediaTitle = params["title"] as string;
  const currentMediaId = params["id"] as string

  return (
    <section className="flex gap-8">
      <div className="max-w-[250px] w-full bg-transparent border rounded-md h-full">
        <ul className="flex flex-col gap-4  p-2">
          <Link to={`/media/config/${currentMediaId}/${currentMediaTitle}/details`}>
            <li className="p-2 hover:bg-blue-700 transition-all rounded-md">
              <span className="text-sm font-semibold">Details</span>
            </li>
          </Link>
          <Link to={`/media/config/${currentMediaId}/${currentMediaTitle}/genre`}>
            <li className="p-2 hover:bg-blue-700 transition-all rounded-md">
              <span className="text-sm font-semibold">Genres</span>
            </li>
          </Link>
          <Link to={`/media/config/${currentMediaId}/${currentMediaTitle}/logo`}>
            <li className="p-2 hover:bg-blue-700 transition-all rounded-md">
              <span className="text-sm font-semibold">Logo</span>
            </li>
          </Link>
        </ul>
      </div>

      {children}
    </section>
  );
}

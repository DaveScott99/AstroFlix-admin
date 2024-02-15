import logo from "../assets/logo.png";
import { DropdownMenu } from "./dropdown-menu";
import { Nav } from "./nav";

export function Header() {
  return (
    <header className="mx-auto max-full w-full bg-transparent fixed top-0 py-4 px-12 flex justify-between items-center">
      <div>
        <img src={logo} alt="Astroflix logo" className="max-w-32" />
      </div>

      <div>
        <Nav />
      </div>

      <div className=" flex gap-3 outline-2 rounded-md cursor-pointer">
        <DropdownMenu />
        <img
          className="rounded-md w-8 h-8"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Account image"
        />
      </div>
    </header>
  );
}

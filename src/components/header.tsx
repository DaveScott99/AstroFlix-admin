
export function Header() {
  return (
    <header className="w-full bg-transparent fixed top-0 py-4 px-24 flex justify-end items-center">

      {/* 
        <div>
          <img src={logo} alt="Astroflix logo" className="max-w-32" />
        </div>

        <div>
          <Nav />
        </div>
      */}


      <div className=" flex gap-3 rounded-md cursor-pointer ">
        <img
          className="rounded-md w-8 h-8 border-2"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Account image"
        />
      </div>
    </header>
  );
}

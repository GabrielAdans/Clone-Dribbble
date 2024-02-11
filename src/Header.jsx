import Logo from "./assets/Logo.png";

export default function Header() {
  return (
    <header className="bg-zinc-500 rounded-t-md">
      <div className="flex items-center justify-between w-9/12 mx-auto text-zinc-100">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="logo" className="w-8 h-8" />
          <div className="text-xl">Elektronický stavenbný denník</div>
        </div>
        <div className="flex items-center gap-4 p-2">
          <div className="text-xs">Nachádzete se na prezentaçnej stránke</div>
          <button className="h-8 px-8 bg-green-500 rounded-md hover:bg-green-700">
            Hiavná stránka
          </button>
        </div>
      </div>
    </header>
  );
}

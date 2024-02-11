import Bg from "./assets/Veneza.png";
import { ChevronDown } from "lucide-react";

export default function Body() {
  return (
    <div className="flex h-screen text-zinc-200">
      <div
        className="flex items-center justify-center w-full min-h-screen bg-center bg-cover opacity-80"
        style={{ backgroundImage: "url(" + Bg + ")" }}
      >
        <div className="flex flex-col justify-center font-bold text-center">
          <p className="text-sm">Kazda stavba potrebuje</p>
          <h1 className="text-4xl">eletronický stavenbý denník</h1>
          <div className="flex w-10 h-10 m-auto bg-opacity-50 rounded-full bg-zinc-500 hover:bg-zinc-900">
            <ChevronDown className="m-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

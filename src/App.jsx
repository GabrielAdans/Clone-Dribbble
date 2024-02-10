import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>Header</header>
      <main>Conteúdo principal</main>
      <footer>Descrições finais</footer>
    </div>
  );
}

export default App;

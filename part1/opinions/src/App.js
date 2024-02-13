import { useState } from "react";
import Opinions from "./Opinions";
import Antecdotes from "./Anecdotes";

function App() {
  
  const [mode, setMode] = useState(0);

  const elegirModo = () => {
    switch (mode) {
      case 0:
        return <p> Elige una de las opciones</p>
      case 1:
        return <Opinions />
      case 2:
        return <Antecdotes />
      default:
        return <p>Opción no reconocida</p>;
    }
  }

  return (
    <div className="App">
      <button onClick={() => {setMode(0)}}>Nada</button>
      <button onClick={() => {setMode(1)}}>Opinions</button>
      <button onClick={() => {setMode(2)}}>Anecdotes</button>

      {elegirModo()}
    </div>
  );
}

export default App;

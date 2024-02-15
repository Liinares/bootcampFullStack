import { useState } from "react";
import InfoCourses from "./InfoCourses";
import Phonebook from "./Phonebook";

function App() {
  
  const [mode, setMode] = useState(0);

  fetch("http://localhost:3889/persons")
    .then(response => {
      console.log(response)
    })

  const elegirModo = () => {
    switch (mode) {
      case 0:
        return <p> Elige una de las opciones</p>
      case 1:
        return <InfoCourses />
      case 2:
        return <Phonebook />
      default:
        return <p>Opción no reconocida</p>;
    }
  }

  return (
    <div className="App">
      <button onClick={() => {setMode(0)}}>Nada</button>
      <button onClick={() => {setMode(1)}}>Courses</button>
      <button onClick={() => {setMode(2)}}>Phonebook</button>

      {elegirModo()}
    </div>
  );
}

export default App;

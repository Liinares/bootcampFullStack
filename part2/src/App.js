import { useState } from "react";
import InfoCourses from "./components/Courses/InfoCourses";
import Phonebook from "./components/Phonebook/Phonebook";
import Countries from "./components/Countries/Countries";
import Blogs from "./components/Blogs/Blogs";

function App() {
  
  const [mode, setMode] = useState(0);

  const elegirModo = () => {
    switch (mode) {
      case 0:
        return <p> Elige una de las opciones</p>
      case 1:
        return <InfoCourses />
      case 2:
        return <Phonebook />
      case 3:
        return <Countries />
      case 4:
        return <Blogs />
      default:
        return <p>Opción no reconocida</p>;
    }
  }

  return (
    <div className="App">
      <button onClick={() => {setMode(0)}}>Nada</button>
      <button onClick={() => {setMode(1)}}>Courses</button>
      <button onClick={() => {setMode(2)}}>Phonebook</button>
      <button onClick={() => {setMode(3)}}>Countries</button>
      <button onClick={() => {setMode(4)}}>Blogs</button>


      {elegirModo()}
    </div>
  );
}

export default App;

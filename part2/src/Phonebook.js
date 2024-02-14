import { useState } from "react";

const Phonebook = () => {
  const [persons, setPersons] = useState([
      { name: 'Arto Hellas' }
  ])

  const [newName, setNewName] = useState('')
    
  const handleSubmit = (event) => {
    event.preventDefault();
    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default Phonebook;
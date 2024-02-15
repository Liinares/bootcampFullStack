import { useState, useEffect} from "react";
import Filter from "./Filter";
import Personform from "./Personform";
import Persons from "./Persons";
import { getAllNotes } from "./services/getAlllNotes";

const Phonebook = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log("Fetch en effect")

    getAllNotes()
      .then(notes => {
        setPersons(notes)
      })
  }, [])
  

  const [newName, setNewName] = useState('')
  const [newNumber, setNewewNumber] = useState('')
  const [filter, setFilter] = useState('')

  console.log("renderizado")
  
  const handleSubmit = (event) => {
    event.preventDefault();

    setPersons(persons.concat({name: newName, number: newNumber, id: persons.length + 1}))
    
    window.alert(`${newName} with number ${newNumber} is already added to phonebook`)

    setNewName("")
    setNewewNumber("")

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setNewewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      
      <Personform handleSubmit={handleSubmit} 
        handleNameChange={handleNameChange} 
        handlePhoneChange={handlePhoneChange}
        newName={newName}
        newNumber={newNumber}/>
      
      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default Phonebook;
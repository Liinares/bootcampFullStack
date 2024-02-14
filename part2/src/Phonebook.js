import { useState } from "react";
import Filter from "./Filter";
import Personform from "./Personform";
import Persons from "./Persons";

const Phonebook = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  console.log("renderizado")
  
  const handleSubmit = (event) => {
    event.preventDefault();

    setPersons(persons.concat({name: newName, phone: newPhone, id: persons.length + 1}))
    
    window.alert(`${newName} with number ${newPhone} is already added to phonebook`)

    setNewName("")
    setNewPhone("")

  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
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
        newPhone={newPhone}/>
      
      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default Phonebook;
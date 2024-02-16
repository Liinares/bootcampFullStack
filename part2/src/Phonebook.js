import { useState, useEffect} from "react";
import Filter from "./Filter";
import Personform from "./Personform";
import Persons from "./Persons";
import { getAllPersons } from "./services/getAllPersons";
import { createPerson } from "./services/createPerson";

const Phonebook = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log("Fetch en effect")

    getAllPersons()
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

    if(newName.length === 0 || newNumber.length === 0){
      window.alert(`Complete all fields`)
    }else{

      const personToCreate = {
        name: newName,
        number: newNumber
      }

      createPerson(personToCreate)
      .then(response => {
        console.log(response.id)
        setPersons(persons.concat({name: newName, number: newNumber, id: response.id}))
      })

    
    window.alert(`${newName} with number ${newNumber} is already added to phonebook`)

    setNewName("")
    setNewewNumber("")
    }
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
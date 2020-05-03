import React, { useState, useEffect} from 'react'
import RenderPhoneBook from './Components/RenderPhoneBook'
import Filter from './Components/Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [showAll, setShowAll] = useState(true)

  var nameToShow = persons

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response =>{
      setPersons(response.data)
    })
  },[])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = ({event},{persons}) =>{
    event.preventDefault()
    const nameObject = {
      name: newName,
      number:newNumber
  }
  for (var i = 0; i <persons.length; i++) {
   if(persons[i].name === nameObject.name){
      alert(`${newName} is already added to the phonebook`)
      setNewName('')
      setNewNumber('')
      return
  }
}
    setPersons(persons.concat(nameObject))
    setNewName('') 
    setNewNumber('')
}

const filterPerson = (event) =>{
  setShowAll(false)  
  setPersons(Filter({showAll},{persons},{event}))
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div> Filter: <input
          onChange = {filterPerson}/>
        </div>
      </form>
        <div>
        <h2>Add a New Person</h2>
        <form onSubmit={addPerson}>
          <div>name: <input
            value={newName}
            onChange={handleNameChange}/>
          </div>
          <div>number: <input 
            value={newNumber}
            onChange={handleNumberChange}
          /></div>
          <div><button type="submit">add</button></div>
        </form>
        </div>
        <RenderPhoneBook nameToShow = {nameToShow} persons ={persons}></RenderPhoneBook>
    </div>
  )
}

export default App
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('Enter a new name')

  const handleNameChange = (event) => {
  setNewName(event.target.value)
}

const addName = (event) =>{
  event.preventDefault()
  const nameObject = {
    name: newName
    //number:1234567890
  }
  for (var i = 0; i <persons.length; i++) {
   if(persons[i].name === nameObject.name){
      alert(`${newName} is already added to the phonebook`)
      setNewName('')
      return
  }
}
    setPersons(persons.concat(nameObject))
    setNewName('') 
}
let displayNames = persons.map(persons =>(
          <li key = {persons.name}>{persons.name}</li>
        ))

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          <form onSubmit={addName}>
           <input
            value={newName}
            onChange={handleNameChange}/>
          <button type="submit">add</button>
          </form>
        </div>
      <h2>Numbers</h2>
      <ul>
        {displayNames}
      </ul>
    </div>
  )
}

export default App
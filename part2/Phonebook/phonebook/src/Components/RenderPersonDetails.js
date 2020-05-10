import React from 'react'

const RenderPersonDetails = ({nameToShow, deletePerson}) => {
	console.log(nameToShow)

  let output = nameToShow.map(person =>
        <li key = {person.name}>{person.name} {person.number}
        <button onClick = {() => deletePerson(person.name)}>Delete
        </button>
        </li>
    )
  return(output)
}

export default RenderPersonDetails
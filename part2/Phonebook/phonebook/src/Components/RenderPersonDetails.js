import React from 'react'

const RenderPersonDetails = ({nameToShow}, {persons}) => {
	return(nameToShow.map(persons =>(
        <li key = {persons.name}>{persons.name} {persons.number}</li>
    )))
}


export default RenderPersonDetails
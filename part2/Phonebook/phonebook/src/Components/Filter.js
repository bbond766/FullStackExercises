let nameToShow = []

const Filter = ({showAll}, {persons}, {event}) => {
	nameToShow = showAll
  	? persons
  	: persons.filter(person => person.name.includes(event.target.value))
  	return(nameToShow)
}

export default Filter
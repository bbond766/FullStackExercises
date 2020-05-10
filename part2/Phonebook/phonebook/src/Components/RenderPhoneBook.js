import React from 'react'
import RenderPersonDetails from './RenderPersonDetails'


const RenderPhoneBook = ({nameToShow, deletePerson}) => {
	let displayNames = RenderPersonDetails({nameToShow, deletePerson})

	return(
		<div>
			<h2>Numbers</h2>
      			<ul>
        			{displayNames}
      			</ul>
    	</div>
    )
}

export default RenderPhoneBook
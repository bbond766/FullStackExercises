import React from 'react'
import RenderPersonDetails from './RenderPersonDetails'


const RenderPhoneBook = ({nameToShow},{persons}) => {
	let displayNames = RenderPersonDetails({nameToShow},{persons})

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
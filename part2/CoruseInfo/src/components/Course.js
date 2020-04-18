import React from 'react'

const Course = (props) =>{
	console.log(props.parts)
	return (
		<div>
		<Header course={props.name}/>
      	<Content course={props.parts}/>
      	<Total course={props.parts}/>
      	</div>
		)
}

const Header = (props) =>{
	return(
		<div>
			<h1>
				{props.course}
			</h1>
		</div>
	)
}

const Total = ({course}) =>{
	let total = 0
	let totalArray = []
	let message1 = "Total of "
	let message2 = " exercises"
	totalArray = course.map(course =>(
		course.exercises			
	))
	total = totalArray.reduce((s,p) => (s+p))
	return(
	<div>
			<p>
				<b>{message1} {total} {message2}</b>
			</p>
	</div>
	)
}

const Part = (props) =>{
	return(
		<div>
			<p>
	 			{props.part} {props.exercise}
			</p>
		</div>
	)
}

const Content = ({course}) =>{
	return course.map(course =>(
		<div key = {course.id}>
			<Part part = {course.name} exercise = {course.exercises}/>
		</div>
	));
}

export default Course
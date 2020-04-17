import React from 'react';
import ReactDOM from 'react-dom';

const Course = (props) =>{
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

const App = () => {
  const course = {
  	id: 1,
  	name: 'Half Stack application development',
  	parts:  [
    	{
 	     name: 'Fundamentals of React',
    	  exercises: 10,
    	  id: 1
    	},
    	{
      	 name: 'Using props to pass data',
      	 exercises: 7,
    	  id: 2
    	},
    	{
      	 name: 'State of a component',
      	 exercises: 14,
    	  id: 3
    	},
    	{
    		name:'Redux',
    		exercises:11,
    		id:4
    	}
  	]
  }

  return (
    <div>
    	<Course name = {course.name} parts = {course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

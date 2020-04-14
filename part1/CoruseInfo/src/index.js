import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) =>{
	return(
		<div>
			<p>
				{props.course}
			</p>
		</div>
	)
}

const Total = ({course}) =>{
	let total = 0
	let message = "Number of exercises"
	return (course.map(course =>(
		total += course.exercises
			
	)),

	<div>
			<p>
				{message} {total}
			</p>
	</div>
	);
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
		<div>
			<Part part = {course.name} exercise = {course.exercises}/>
		</div>
	));
}

const App = () => {
  const course = {
  	name: 'Half Stack application development',
  	parts:  [
    	{
 	     name: 'Fundamentals of React',
    	  exercises: 10
    	},
    	{
      	 name: 'Using props to pass data',
      	 exercises: 7
    	},
    	{
      	 name: 'State of a component',
      	 exercises: 14
    	}
  	]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content course={course.parts}/>
      <Total course={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

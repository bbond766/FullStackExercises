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

const Total = ({parts}) =>{
	let total = 0
	let message = "Number of exercises"
	return (parts.map(parts =>(
		total += parts.exercises
			
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

const Content = ({parts}) =>{
	return parts.map(parts =>(
		<div>
			<Part part = {parts.name} exercise = {parts.exercises}/>
		</div>
	));
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

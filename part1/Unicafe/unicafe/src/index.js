import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Stats = (props) =>{
  return(
    <div>
       {props.text}{props.number}
    </div>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () =>{
    setGood(good+1)
  }

  const handleNeutralClick = () =>{
    setNeutral(neutral+1)
  }

  const handleBadClick = () =>{
    setBad(bad+1)
  }

  return (        
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>Statistics</h1>
      <Stats text={'Good: '} number = {good}/>
      <Stats text={'Neutral: '} number = {neutral}/>
      <Stats text={'Bad: '} number = {bad}/>
      <Stats text={'All: '} number = {good+neutral+bad}/>
      <Stats text={'Average: '} number = {(good-bad)/(good+bad+neutral)}/>
      <Stats text={'Positive: '} number = {100*good/(good+bad+neutral) + ' %'}/>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
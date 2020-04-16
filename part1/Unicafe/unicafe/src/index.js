import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) =>{
  return(
    <div>
     {props.text} {props.value} 
     </div>
     )
}

const Button = (props) =>{
  return(
  <button onClick={props.click}>{props.text}</button>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [numClicks, setClicks] = useState([])
  let total = good+bad+neutral

  const handleGoodClick = () =>{
    setGood(good+1)
    setClicks(numClicks.concat('G'))
  }

  const handleNeutralClick = () =>{
    setNeutral(neutral+1)
    setClicks(numClicks.concat('N'))
  }

  const handleBadClick = () =>{
    setBad(bad+1)
    setClicks(numClicks.concat('B'))
  }

  let numberClicks = numClicks.length

  return (        
    <div>
      <h1>Give Feedback</h1>
      <Button click={handleGoodClick} text={'good'}/>
      <Button click={handleNeutralClick} text = {'neutral'}/>
      <Button click={handleBadClick} text = {'bad'}/>
      <h1>Statistics</h1>
      <Statistics text={'Good: '} value={good}/>
      <Statistics text={'Neutral: '} value={bad}/>
      <Statistics text={'Bad: '} value={neutral}/>
      <Statistics text={'All: '} value={total}/>
      <Statistics text={'Average: '} value={(good-bad)/total}/>
      <Statistics text={'Positive: '} value={100*good/(total) + ' %'}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) =>{
  if(props.clicks === 0){
    return(
      <div>
        No feedback given
      </div>
      );
  }
  var outputs = []
  for (var i = 0; i < 6; i++) {
    outputs = outputs.concat([props.text[i] + props.number[i]])

    console.log(props.text[i] + props.number[i])
  }
  console.log(outputs)
      return(
        <div>
        <ul>
          {outputs.map(output => {return(<li>{output}</li>)})}
        </ul>
        </div>
        );
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [numClicks, setClicks] = useState([])
  const text = ['Good: ', 'Neutral: ', 'Bad: ','All: ','Average: ', 'Positive: ']
  let total = good+bad+neutral
  const numbers = [good, bad, neutral, total, (good-bad)/total, 100*good/(total) + ' %']

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
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>Statistics</h1>
      <Statistics text={text} number={numbers} clicks={numberClicks}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
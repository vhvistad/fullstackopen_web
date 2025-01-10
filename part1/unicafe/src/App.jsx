import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.feedback}
    </button>
  )
}

const Statistics = (props) => {
  const [good, neutral, bad] = props.stats
  console.log(good)
  return (
    <div>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <Button handleClick={() => setGood(good + 1)} feedback='good'/>
        <Button handleClick={() => setNeutral(neutral + 1)} feedback='neutral'/>
        <Button handleClick={() => setBad(bad + 1)} feedback='bad'/>
      </div>
      <Statistics stats={[good, neutral, bad]}/>
    </div>
  )
}

export default App
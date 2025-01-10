import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Statistics = (props) => {
  const [good, neutral, bad, total, avg, posPercent] = props.stats
  if (total === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <div>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>All: {total}</div>
      <div>Average: {avg}</div>
      <div>Positive: {posPercent} %</div>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [avg, setAvg] = useState(0)
  const [posPercent, setPosPercent] = useState(0)

  const registerFeedback = (feedback) => {
    let newGood = good
    let newNeutral = neutral
    let newBad = bad
    let newTotal = total + 1

    if (feedback === 'good') {
      newGood++
      setGood(newGood)
    }
    if (feedback === 'neutral') {
      newNeutral++
      setNeutral(newNeutral)
    }
    if (feedback === 'bad') {
      newBad++
      setBad(newBad)
    }

    setTotal(newTotal)
    setAvg((newGood - newBad) / newTotal)
    setPosPercent(newGood / newTotal * 100)
  }

  return (
    <div>
      <h2>Give feedback</h2>
      <Button handleClick={() => registerFeedback('good')} text='good'/>
      <Button handleClick={() => registerFeedback('neutral')} text='neutral'/>
      <Button handleClick={() => registerFeedback('bad')} text='bad'/>
      <h2>Statistics</h2>
      <Statistics stats={[good, neutral, bad, total, avg, posPercent]}/>
    </div>
  )
}

export default App
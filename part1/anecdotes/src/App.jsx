import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const [winner, setWinner] = useState(0)

  const getRandomInt = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    const rand = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
    setSelected(rand)
  }
  
  const vote = v => {
    const copy = [...points]
    copy[v] += 1
    setPoints(copy)
    const w = indexOfMax(copy)
    setWinner(w)
  }

  const indexOfMax = arr => {
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>Has {points[selected]} votes</div>
      <button onClick={() => vote(selected)}>Vote</button>
      <button onClick={() => getRandomInt(0, anecdotes.length)}>Next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <div>{anecdotes[winner]}</div>
      <div>Has {points[winner]} votes</div>
    </div>
  )
}

export default App
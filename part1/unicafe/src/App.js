import { useState } from 'react'

// displays the statistics
const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={props.all}/>
      <StatisticLine text="avg" value={props.avg}/>
      <StatisticLine text="pos" value={props.pos}/>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  if (text === "pos") {
    return (
      <div>
        {text} {value} %
      </div>
    )
  }
  return (
    <div>
      {text} {value}
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)
  const [pos, setPos] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setAll(updatedGood+neutral+bad)
    setAvg((updatedGood-bad)/(updatedGood+neutral+bad))
    setPos(updatedGood/(updatedGood+neutral+bad)*100)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAll(updatedNeutral+good+bad)
    setAvg((good-bad)/(updatedNeutral+good+bad))
    setPos(good/(updatedNeutral+good+bad)*100)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAll(updatedBad+good+neutral)
    setAvg((good-updatedBad)/(updatedBad+good+neutral))
    setPos(good/(updatedBad+good+neutral)*100)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} avg={avg} pos={pos}/>
    </div>
  )
}


export default App
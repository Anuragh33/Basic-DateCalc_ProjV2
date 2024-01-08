import "./styles.css"
import { useState } from "react"
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  )
}

function Counter() {
  const [steps, setSteps] = useState(1)

  const [count, setCount] = useState(0)

  const cnt = count * steps

  const date = new Date("january 06 2024")
  date.setDate(date.getDate() + cnt)

  function increaseCount() {
    setCount((c) => c + 1)
  }
  function decreaseCount() {
    setCount((c) => c - 1)
  }

  function reset() {
    setCount(0)
    setSteps(1)
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          defaultValue="1"
          step="1"
          onChange={(e) => setSteps(Number(e.target.value))}
        ></input>
        {steps}
        {/* <button onClick={decreaseStep}>-</button>
        Steps :{steps}
        <button onClick={increaseStep}>+</button> */}
      </div>

      <div>
        <button onClick={decreaseCount}>-</button>
        <input
          type="text"
          value={cnt}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={increaseCount}>+</button>
      </div>
      <div>
        <span>{cnt === 0 ? "Today is " : ""}</span>
        <span>{cnt > 0 ? `${cnt} days from now  is ` : ""}</span>
        <span>{cnt < 0 ? `${cnt} days ago is ` : ""}</span>
        <span>{date.toDateString()}</span>
      </div>

      {count !== 0 || steps !== 1 ? (
        <div>
          <button onClick={reset}>Reset</button>
        </div>
      ) : null}
    </div>
  )
}

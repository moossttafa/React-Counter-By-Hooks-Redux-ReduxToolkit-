import React, { useState } from 'react'
import classes from "./Counter.module.css"

const Counter = () => {
  const [count, setCount] = useState(0)

  const incrementHandler = () => {
    setCount(count => count + 1)
  }
  const decrementHandler = () => {
    setCount(count => count - 1)
  }
  const toggleCounterHandler = () =>{
    setCount(0)
  }

  return (
    <main className={classes.counter}>
      <h1>Counter By Hooks</h1>
      <div className={classes.value}>{count}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Reset</button>
    </main>
  )
}

export default Counter
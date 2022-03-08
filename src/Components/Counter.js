import React from 'react'
import classes from "./Counter.module.css"

const Counter = () => {


  return (
    <main className={classes.counter}>
      <h1>Counter By Hooks</h1>
      <div className={classes.value}>value</div>
      <div>
        <button >Increment</button>
        <button >Decrement</button>
      </div>
      <button>Reset</button>
    </main>
  )
}

export default Counter
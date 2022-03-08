import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../Store';
import classes from "./Counter.module.css"

const Counter = () => { 

  const dispatch = useDispatch();
  const counter = useSelector(state => state.count)

  const incrementHandler = () => { 
    dispatch(counterActions.increment(1))
  }
  const decrementHandler = () => { 
    dispatch(counterActions.decrement(1))
  }
  const ReserHandler = () =>{ 
    dispatch(counterActions.reset(0))
  }

  return (
    <main className={classes.counter}>
      <h1>Counter By ReduxToolkit</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={ReserHandler}>Reset</button>
    </main>
  )
}

export default Counter
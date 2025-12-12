import { useState, useReducer } from 'react'
import './App.css'


function reducer(state, action) {
  return {
    count: state.count + 1
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  function increment() {
    dispatch();
  }

  function decrement() {
    // setCount( prevCount => prevCount - 1)
  }

  return (
    <div>

      <button className="decrement" onClick={decrement}>
        –
      </button>
      <span className="count">{state.count}</span>
      <button className="increment" onClick={increment}>
        +
      </button>

    </div>
  )
}

export default App

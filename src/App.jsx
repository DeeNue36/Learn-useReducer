import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount( prevCount => prevCount + 1)
  }

  function decrement() {
    setCount( prevCount => prevCount - 1)
  }

  return (
    <div>

      <button className="decrement" onClick={decrement}>
        –
      </button>
      <span className="count">{count}</span>
      <button className="increment" onClick={increment}>
        +
      </button>

    </div>
  )
}

export default App

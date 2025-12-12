import { useReducer } from 'react'
import { ACTIONS } from './constants'
import './App.css'


function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {
        count: state.count + 1
      }
  
    case ACTIONS.DECREMENT:
      return {
        count: state.count - 1
      }
  
    default:
      return state;
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
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

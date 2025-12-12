import { useReducer, useState } from 'react'
import { ACTIONS } from './constants'
import './App.css'


function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...todos,
        newTodo(action.payload.name),
      ]
  }
}

function newTodo(name) {
  return {
    id: Date.now(),
    name: name,
    completed: false
  }
}


function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

function handleFormSubmit(e) {
  e.preventDefault();
  dispatch({
    type: ACTIONS.ADD_TODO,
    payload: {name},
  })
  setName('');
}

console.log(todos)

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          id='todo-input'
        />
      </form>

    </div>
  )
}

export default App

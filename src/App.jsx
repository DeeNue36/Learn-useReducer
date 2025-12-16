import { useReducer, useState } from 'react'
import { ACTIONS } from './constants'
import { Todo } from './Todo'
import './App.css'


function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...todos,
        newTodo(action.payload.name),
      ]
    
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
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
    payload: {name: name},
  })
  setName('');
}

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
      
      <div className="user-todos">
        {todos.map(todo => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
        })}
      </div>
    </div>
  )
}

export default App

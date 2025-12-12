import { useReducer, useState } from 'react'
import { ACTIONS } from './constants'
import './App.css'


function reducer(state, action) {
  switch (action.type) {

  }
}


function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

function handleFormSubmit() {
  dispatch({
    type: ACTIONS.ADD_TODO
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

    </div>
  )
}

export default App

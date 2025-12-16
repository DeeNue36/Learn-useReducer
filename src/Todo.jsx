import React from 'react'
import { ACTIONS } from './constants'
import './App.css'

export const Todo = ({ todo, dispatch }) => {
    return (
        <div>
            <span className={`todo-text ${todo.completed ? 'completed-true' : 'completed-false'}`}>
                {todo.name}
            </span>
            <button 
                onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id} })}
            >
                Toggle
            </button>
            <button>Delete</button>


            {/* Inline Style */}
            {/* <span style={ 
                {
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? '10b981' : 'dc143c'
                }
            }>
                {todo.name}
            </span> */}
        </div>
    )
}

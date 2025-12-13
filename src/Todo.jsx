import React from 'react'
import './App.css'

export const Todo = ({ todo }) => {
    return (
        <div>
            <span className={`todo-text ${todo.completed ? 'completed-true' : 'completed-false'}`}>
                {todo.name}
            </span>
            <button>Toggle</button>
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

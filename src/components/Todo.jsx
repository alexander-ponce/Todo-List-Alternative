import React from 'react'

const Todo = (props) => {
    const todoClasses = [""];

          if (props.todo.complete) {
            todoClasses.push("strike-through");
          }

  return (
        <div className= "body">
              <input onChange={(event) => {
                props.handleToggleTodoComplete(props.i);
              }} 
              type="checkbox" checked={props.todo.complete}/>
              <span className={todoClasses.join(" ")}> {props.todo.text}</span>
              <button onClick = {(event) => {props.handleTodoDelete(props.i);}} style={{marginLeft : "10px"}} > Delete </button>
            </div>
            

  )
}

export default Todo
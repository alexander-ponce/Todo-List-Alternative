import './App.css';
import React, { useState} from 'react';
import Todo from './components/Todo';

function App() {

    const [newTodo, setNewTodo] = useState ("");
    const [todos, setTodos] = useState ([]); 

    const handleNewTodoSubmit = (event) => {
      event.preventDefault();

      if (newTodo.length === 0) {
        return;
      }

      const todoItem = {
        text: newTodo,
        complete: false
      }
      // setTodos and pass the newn array containing all current todos plus 1 more
      setTodos([...todos, todoItem]);
      setNewTodo("");
    }

    const handleTodoDelete = (delIdx) => {
      const filteredTodos = todos.filter((todo, i) => {
        return i !== delIdx;

      });
      setTodos(filteredTodos);
    }

    const handleToggleTodoComplete = (idx) => {
      const updatedTodos = todos.map((todo, i) => {
          if (idx === i) {
            todo.complete = ! todo.complete;
          
          }


        return todo;
      });
      setTodos(updatedTodos)
    }

  return (
    <div className="App" >
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }} >
      <input onChange={(event) => {
        setNewTodo (event.target.value);
        }} 
        type="text" value= {newTodo} />
      <div>
        <button>Add</button>
      </div>
      </form>


      
        {todos.map((todo, i) => {
            return ( 
            <Todo key={i} i={i} todo={todo} handleToggleTodoComplete= {handleToggleTodoComplete} handleTodoDelete={handleTodoDelete} />
            );
          })
        }
     

    </div>
  );
}

export default App;

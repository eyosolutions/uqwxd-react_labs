import React from "react";
import "./App.css";
const App = () => {
    // eslint-disable-next-line
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };
    if (newTodo.text.length > 0 ) {
        setTodos([...todos].concat(newTodo));
        setTodo("");
    
    } else {
        
        alert("Enter Valid Task");
        setTodo(""); 
    }
  }
  // function to delete todo list item
  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }
  // function to indicate complete task
  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
return(
<div className ="App">
  <h1>Todo List</h1>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      onChange={(e) => setTodo(e.target.value)}
      placeholder="Add a new task"
      value={todo}
    />
    <button type="submit">Add Todo</button>
  </form>
  <form id="del_btn">
    <input type="checkbox" id="completed" checked={todo.completed} onChange={() => toggleComplete(todo.id)}/>
    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
  </form>
  {todos.map((todo) => <div>{todo.text}</div>)}
</div>
);
};
export default App;

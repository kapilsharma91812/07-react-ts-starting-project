import React from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';
import { useState } from 'react';

import './App.css';

function App() {
  const[todoList, addTodo] = useState<Todo[]>([])
  //const todo = [new Todo("abc"),new Todo("xyz")];
  const addTodoHandler =(text:string) => {
const newTodo = new Todo(text);
addTodo((oldTodos)=>{
return oldTodos.concat(newTodo);
})
  }

  const todoRemoveHandler = (todoId:string) =>{
addTodo((oldTodos)=> {
  return oldTodos.filter(todo=> todo.id !== todoId);

});
  }
  return (
    <div >
      <NewTodo onAddTodo={addTodoHandler}/>
   <Todos items={todoList} onRemoveTodo={todoRemoveHandler}/>
    </div>
  );
}

export default App;

import './App.css';
import React, {useState} from 'react';

import Form from './components/form';
import Todolist from './components/todolist';
import Todo from './components/todo';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>
          zaryab's todo list
        </h1>
      </header>

      <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText}/>
      
      <Todolist setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;



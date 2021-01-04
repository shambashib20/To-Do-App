import React, { useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import ToDolist from './components/ToDolist';
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Shambashib's To Do list</h1>
      </header>
      <Form
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos}
        setInputText={setInputText}
       />
      <ToDolist />
    </div>     
  );
};

export default App;

import React, { useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import ToDolist from './components/ToDolist';
function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Shambashib's To Do list:</h1>
      </header>
      <Form setInputText={setInputText}/>
      <ToDolist />
    </div>     
  );
};

export default App;
